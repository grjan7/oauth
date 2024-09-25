'use strict'

import { createHash } from 'node:crypto'
import { stringify } from 'node:querystring'
import { ClientStore } from '../../dao/v1/clientStore.js'
import { TokenStore } from '../../dao/v1/tokenStore.js'
import { hash } from '../../utils/utils.js'
import { OAUTH_ERRORS, ERRORS } from '../../utils/constants.js'

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
      const { clientId, redirectUri, scopes, responseType, codeChallange, challangeMethod } = req.query
      if (!clientId || !redirectUri || !scopes || !responseType || !codeChallange || !challangeMethod) {
        res.status(400).json(OAUTH_ERRORS.UNDEFINED_QUERY_PARAMETERS)
        return
      }
      const client = await ClientStore.getClientAppByClientId(clientId)
      if (!client) {
        res.status(400).json(OAUTH_ERRORS.INVALID_CLIENT_ID)
        return
      }
      const isValidRedirectUri = (client.redirectUri == redirectUri)
      const isValidScopes = OauthController.isValidScopes(client.scopes, scopes)
      const isValidResponseType = responseType.toLowerCase() == "code"
      const isValidChallangeMethod = challangeMethod.toLowerCase() == 'sha256'

      if (!isValidResponseType) {
        res.status(400).json(OAUTH_ERRORS.INVALID_RESPONSE_TYPE)
        return
      }
      if (!isValidRedirectUri) {
        res.status(400).json(OAUTH_ERRORS.INVALID_REDIRECT_URI)
        return
      }
      if (!isValidScopes) {
        res.status(400).json(OAUTH_ERRORS.INVALID_SCOPES)
        return
      }
      if (!isValidChallangeMethod) {
        res.status(400).json(OAUTH_ERRORS.INVALID_CHALLANGE_METHOD)
        return
      }
      next()

    } catch (e) {
      throw new Error(e)
    }
  }

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
        res.status(500).json(ERRORS.INTERNAL_SERVER_ERROR)
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async validateSignInInfo(req, res, next) {
    try {
      const { username, password } = req.body
      const { clientId, sid } = req.query
      if (!username) {
        res.status(400).json(ERRORS.UNDEFINED_USERNAME)
        return
      }
      if (!password) {
        res.status(400).json(ERRORS.UNDEFINED_PASSWORD)
        return
      }
      if (!clientId) {
        res.status(400).json(OAUTH_ERRORS.UNDEFINED_CLIENT_ID)
        return
      }
      if (!sid) {
        res.status(400).json(OAUTH_ERRORS.UNDEFINED_SID)
        return
      }
      next()
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
      const user = await AccountStore.findAccountByEmailId(username)
      if (!user) {
        res.status(400).json(ERRORS.USERNAME_NOT_FOUND)
        return
      }
      const isValidPassword = (hashedPassword == user.hashedPassword)
      if (!isValidPassword) {
        res.status(400).json(ERRORS.INVALID_PASSWORD)
        return
      }
      // after successful sign-in, update token with userInfo
      const { _id, email, firstname, lastname } = user
      const userInfo = { _id, email, firstname, lastname }
      const updateResult = await TokenStore.updateTokenWithUser(sid, userInfo)
      if (updateResult.matchedCount != 1 && updateResult.modifiedCount != 1) {
        res.status(500).json(ERRORS.INTERNAL_SERVER_ERROR)
        return
      }
      // get clientInfo to receive user consent 
      const client = await ClientStore.getClientAppByClientId(clientId)
      if (!client) {
        res.status(400).json(OAUTH_ERRORS.INVALID_CLIENT_ID)
        return
      }
      const { name, scopes, logoUrl } = client
      res.status(200).json({ clientId, name, scopes, logoUrl })
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
      if (!grantStatus) {
        res.status(400).json(OAUTH_ERRORS.UNDEFINED_GRANT_STATUS)
        return
      }
      if (!sid) {
        res.status(400).json(OAUTH_ERRORS.UNDEFINED_SID)
        return
      }
      const token = await TokenStore.getTokenByTokenId(sid)
      if (!token) {
        res.status(400).json(OAUTH_ERRORS.INVALID_SID)
        return
      }
      const { redirectUri, state } = token
      if (grantStatus == 'allow') {
        // update the token and redirect the user with code
        const authorizationCode = generateAuthorizationCode(token)
        const result = await TokenStore.updateTokenWithAuthorizationCode(sid, authorizationCode)
        if (result.matchedCount != 1 && result.modifiedCount != 1) {
          res.status(500).json(ERRORS.INTERNAL_SERVER_ERROR)
          return
        }
        const { code } = authorizationCode
        const query = stringify(code, state)
        const redirectUriWithCode = `${redirectUri}?${query}`
        res.redirect(redirectUriWithCode)

      } else if (grantStatus == 'deny') {
        // delete the token and redirect the user with error message
        await TokenStore.deleteTokenByTokenId(sid)
        const query = stringify({ error: 'access_denied', state })
        const redirectUriWithErrorMessage = `${redirectUri}?${query}`
        res.redirect(redirectUriWithErrorMessage)

      } else {
        res.status(400).json(OAUTH_ERRORS.INVALID_GRANT_STATUS)
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static verifyPKCE(codeChallange, challangeMethod, codeVerifier) {
    const codeVerifierHash = createHash(challangeMethod)
      .update(codeVerifier)
      .digest('base64')
    const isVerified = (codeVerifierHash == codeChallange)
    return isVerified
  }

  static async validateCredentialsFromAuthorization(req, res, next) {
    const { authorization } = req.headers
    if (!authorization) {
      res.status(400).json(OAUTH_ERRORS.UNDEFINED_AUTHORIZATION_HEADER)
      return
    }
    const [authorizationMethod, credentials] = authorization.split(" ")
    if (authorizationMethod.toLowerCase() != 'basic') {
      res.status(400).json(OAUTH_ERRORS.INVALID_AUTHORIZATION_METHOD)
      return
    }
    if (!credentials) {
      res.status(400).json(OAUTH_ERRORS.MISSING_CLIENT_CREDENTIALS)
      return
    }
    const [clientId, clientSecret] = btoa(credentials).split(":")
    if (!clientId) {
      res.status(400).json(OAUTH_ERRORS.MISSING_CLIENT_ID)
      return
    }
    if (!clientSecret) {
      res.status(400).json(OAUTH_ERRORS.MISSING_CLIENT_SECRET)
      return
    }
    next()
  }

  static async validateTokenRequest(req, res, next) {
    try {
      const { codeVerifier, grantType, code, redirectUri } = req.query
      if (!codeVerifier) {
        res.status(400).json(OAUTH_ERRORS.MISSING_CODE_VERIFIER)
        return
      }
      if (!grantType) {
        res.status(400).json(OAUTH_ERRORS.MISSING_GRANT_TYPE)
        return
      }
      if (grantType != 'authorization_code') {
        res.status(400).json(OAUTH_ERRORS.INVALID_GRANT_TYPE)
        return
      }
      if (!code) {
        res.status(400).json(OAUTH_ERRORS.MISSING_AUTHORIZATION_CODE)
        return
      }
      if (!redirectUri) {
        res.status(400).json(OAUTH_ERRORS.MISSING_REDIRECT_URI)
        return
      }
      // validate redirectUri
      next()

    } catch (e) {
      throw new Error(e)
    }
  }

  // when the request hits token endpoint
  // validate request query parameters
  // validate pkce
  // validate clientCredentials
  // validate authorization code and its validity
  // generate access_token
  // respond with access_token

  static async exchangeCodeForToken(req, res, next) {

  }

}