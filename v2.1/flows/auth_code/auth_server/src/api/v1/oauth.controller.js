
'use strict'

import { stringify } from 'node:querystring'
import { ClientStore } from '../../dao/v1/clientStore.js'
import { TokenStore } from '../../dao/v1/tokenStore.js'
import { hash } from '../../utils/utils.js'

export default class OauthController {

  static isValidScopes(registeredScopes, requestedScopes) {
    let isValid = true
    for (let requestedScope of requestedScopes) {
      if (registeredScopes.indexOf(requestedScope) == -1) {
        isValid = false
        break
      }
    }
    return isValid
  }

  static async validateAuthorizeRequest(req, res, next) {
    try {
      const { clientId, redirectUri, scopes, responseType } = req.query
      const client = await ClientStore.findClientAppByClientId(clientId)
      if (client) {
        const isValidRedirectUri = (client.redirectUri == redirectUri)
        const isValidScopes = OauthController.isValidScopes(client.scopes, scopes)
        const isValidResponseType = responseType == "code"
        if (!isValidRedirectUri) {
          res.status(400).json({ error: `Invalid redirectUri.` })
          return
        }
        if (!isValidScopes) {
          res.status(400).json({ error: `Invalid scopes.` })
          return
        }
        if (!isValidResponseType) {
          res.status(400).json({ error: `Invalid responseType.` })
          return
        }
        next()
      } else {
        res.status(400).json({ error: `Invalid clientId.` })
        return
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  // 
  static async authorize(req, res, next) {
    try {
      const clientInfo = req.query
      const result = await TokenStore.createToken(clientInfo)
      const sid = result.insertedId
      if (sid) {
        let oauthSigninUri = '/signin/flow/oauth?'
        oauthSigninUri += stringify(req.query)
        oauthSigninUri += 'sid=' + sid
        res.redirect(oauthSigninUri)
      } else {
        res.status(500).json({ error: `Internal server error` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  // oauth signin does not have session 
  // it works based on tokenId - sid
  static async signin(req, res, next) {
    try {
      const { username, password } = req.body
      const { clientId, sid } = req.query
      const hashedPassword = hash(password)
      const userInfo = await AccountStore.findAccountByEmailId(username)
      if (userInfo) {
        const isValidPassword = (hashedPassword == userInfo.hashedPassword)
        if (isValidPassword) {
          const accountId = userInfo._id
          const { email, firstname, lastname } = userInfo
          const user = { accountId, email, firstname, lastname }
          const updateTokenWithUserResult = await TokenStore.updateTokenWithUser(sid, user)
          if (updateTokenWithUserResult.modifiedCount == 1) {
            const clientInfo = await ClientStore.getClientAppByClientId(clientId)
            if (clientInfo) {
              const { name, scopes, logoUrl } = clientInfo
              res.status(200).json({ clientId, name, scopes, logoUrl })
            } else {
              res.status(500).json({ error: `Invalid clientId` })
            }

          } else {
            res.status(500).json({ error: `Internal server error` })
          }
        } else {
          res.status(400).json({ status: `Incorrect password` })
        }
      } else {
        res.status(400).json({ status: `Username is not found` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static generateAuthorizationCode(tokenInfo) {
    try {
      const { tokenId, clientId, accountId, codeChallange, state } = tokenInfo
      const authorizationCodeGeneratedTimeInMs = new Date().getTime()
      const TIME_TO_LIVE = 5 * 60 * 1000 // 5 minutes
      const authorizationCodeString = tokenId + clientId + accountId + codeChallange + state + authorizationCodeGeneratedTimeInMs
      const code = hash(authorizationCodeString)
      return {
        createdAt: authorizationCodeGeneratedTimeInMs,
        expiresAt: authorizationCodeGeneratedTimeInMs + TIME_TO_LIVE,
        ttl: TIME_TO_LIVE,
        code
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateGrantStatus(req, res, next) {
    try {
      const { grantStatus } = req.body
      const { sid } = req.query
      if (grantStatus) {
        if (sid) {
          const token = await TokenStore.getTokenByTokenId(sid)
          if (token) {
            const { clientId, redirectUri, state, scopes, nonce } = token
            if (grantStatus == "allow") {
              // generate authorizationCode
              const authorizationCode = generateAuthorizationCode(token)
              // update token with authorizationCode
              const result = await TokenStore.updateTokenWithAuthorizationCode(sid, authorizationCode)
              if (result.matchedCount == 1 && result.modifiedCount == 1) {
                // post authorizationCode to client redirectUri
                const { code, expiresAt } = authorizationCode
                const query = stringify(code, state)
                const redirectUriWithQuery = redirectUri + "?" + query
                res.redirect(redirectUriWithQuery)
              } else {
                res.status(500).json({ error: `Internal server error` })
              }

            } else if (grantStatus == "deny") {
              await TokenStore.deleteTokenByTokenId(sid)
              // need more clarity in redirection
              const redirectUriWithErrorMessage = redirectUri + "?" + "error=access_denied"
              res.redirect(redirectUriWithErrorMessage)
            } else {
              res.status(400).json({ error: `Invalid grantStatus.` })
            }
          } else {
            res.status(400).json({ error: `Invalid sid.` })
          }

        } else {
          res.status(400).json({ error: `sid is missing.` })
        }
      } else {
        res.status(400).json({ error: `grantStatus is missing.` })
      }

    } catch (e) {
      throw new Error(e)
    }
  }


}