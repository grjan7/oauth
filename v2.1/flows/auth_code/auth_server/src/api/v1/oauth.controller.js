
'use strict'

import { stringify } from 'node:querystring'
import { ClientStore } from '../../dao/v1/clientStore.js'
import { TokenStore } from '../../dao/v1/tokenStore.js'
import { hash } from '../../utils/utils.js'

export default class OauthController {

  static async validateClient(clientInfo) {

  }

  static async validateAuthorizeRequest(req, res, next) {
    try {
      const { clientId, redirectUri, scopes } = req.query
      const client = await ClientStore.findClientAppByClientId(clientId)
      if (client) {
        const isValidRedirectUri = (client.redirectUri == redirectUri)
        const isValidScopes = (client.scopes == scopes) // need to validate array properly
        if (!isValidRedirectUri) {
          res.status(400).json({ error: `Invalid redirectUri.` })
          return
        }
        if (!isValidScopes) {
          res.status(400).json({ error: `Invalid scopes.` })
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
            const clientInfo = await ClientStore.findClientAppByClientId(clientId)
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

}