'use strict'

import { randomBytes } from 'node:crypto'
import { ClientStore } from '../../dao/v1/clientStore.js'
import { TokenStore } from '../../dao/v1/tokenStore.js'
import { hash } from '../../utils/utils.js'


export default class ClientController {

  static MAX_CLIENT_APPS_PER_USER = 10

  // validateClientAppName
  // validateRedirectUri
  // validateScopes
  // validateAppUrl
  // logoUrl
  // logo

  static validateClientAppInfo(clientInfo) {
    let isValid = false
    // validateClientAppName
    // validateRedirectUri
    // validateScopes
    // validateAppUrl
    // logoUrl
    // logo 
    return isValid
  }

  // need to be implemented
  static clientCredentialsFromHeader(req, res, next) {
    const { authorization } = req.headers
    const [authorizationType, credentials] = authorization.split(" ")
    const isBasic = authorizationType == 'basic' || authorizationType == 'BASIC'
    const isBearer = authorizationType == 'bearer' || authorizationType == 'BEARER'
    if (authorizationType) {
      if (isBasic) {

      } else if (isBearer) {

      } else {

      }
    }
  }

  static async validateClientCredentials(req, res, next) {
    try {
      const { clientId, clientSecret } = req.body
      const client = await ClientStore.getClientAppByClientId(clientId)
      if (client) {
        if (clientSecret == client.clientSecret) {
          next()
        } else {
          res.status(401).json({ error: `Invalid clientSecret` })
          return
        }
      } else {
        res.status(401).json({ error: `Invalid clientId.` })
        return
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static generateClientId() {
    return randomBytes(24).toString('hex')
  }

  static generateClientSecret() {
    return randomBytes(24).toString('base64url')
  }

  static generateClientCredentials() {
    const clientId = ClientController.generateClientId()
    const clientSecret = ClientController.generateClientSecret()
    return { clientId, clientSecret }
  }

  static async registerClientAppByEmailId(req, res, next) {
    try {
      const { email, accountId } = req.body.session
      if (email) {
        const { name, url, redirectUri, logoUrl, scopes } = req.body
        const clientSecret = ClientController.generateClientSecret()
        const clientInfo = {
          name,
          url,
          email,
          accountId,
          redirectUri,
          logoUrl,
          scopes,
          clientSecret
        }

        const isValidClientInfo = ClientController.validateClientAppInfo(clientInfo)

        if (isValidClientInfo) {
          const clientAppsList = await ClientStore.listClientAppsByEmailId(email)
          const hasClientAppQuotaExceeded = (clientAppsList.length >= ClientController.MAX_CLIENT_APPS_PER_USER)

          if (!hasClientAppQuotaExceeded) {
            const result = await ClientStore.createClientApp(clientInfo)
            if (result.insertedId) {
              const clientCredentials = { clientId: result.insertedId, clientSecret }
              res.status(200).json(clientCredentials)
            } else (
              res.status(500).json({ status: `Internal server error.` })
            )
          } else {
            res.status(400).json({ status: `Your app quota is full.` })
          }
        } else {
          res.status(400).json({ status: `Client metadata provided is not valid.` })
        }
      } else {
        res.status(401).json({ status: `Unauthorized access.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listClientAppsByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = await ClientStore.listClientAppsByEmailId(email)
        res.status(200).json(result)
      } else {
        res.status(401).json({ status: `Unauthorized access.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  // use of emailId ensures authorized action
  static async getClientAppByClientIdAndEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const { clientId } = req.body
        const result = await ClientStore.getClientAppByClientIdAndEmailId(email, clientId)
        res.status(200).json(result)
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientSecretByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }

  static async updateRedirectUriByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }

  static async updateClientAppUrlByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }

  static async updateClientAppLogoUrlByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }

  static async updateClientAppScopesByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }

  static async updateClientAppNameByClientIdAndEmailId(req, res, next) {
    res.status(200).json({ success: true })
  }


  static async deleteClientAppByClientIdAndEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        await TokenStore.deleteTokensOwnedByClientIdAndEmailId(email, clientId)
        await ClientStore.deleteClientAppByClientIdAndEmailId(email, clientId)
        res.status(200).json({ status: `Client app with Id ${clientId} owned by this account has been successfully deleted.` })
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }


  static async deleteAllClientAppsByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        await TokenStore.deleteAllTokensOwnedByEmailId(email)
        await ClientStore.deleteAllClientAppsByEmailId(email)
        res.status(200).json({ status: `All client applications owned by this account (${email}) has been successfully deleted.` })
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}