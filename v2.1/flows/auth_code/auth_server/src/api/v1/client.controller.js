'use strict'

import { randomBytes } from 'node:crypto'
import { ClientStore } from '../../dao/v1/clientStore.js'
import { hash } from '../../utils/utils.js'


export default class ClientController {

  static MAX_CLIENT_APPS_PER_USER = 10

  static validateClientAppInfo(clientMetadata) {

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

  static async createClientAppByEmailId(req, res, next) {
    try {
      const { email, accountId } = req.body.session
      if (email) {
        const { name, url, redirectUri, logo, scopesRequested } = req.body
        const clientSecret = ClientController.generateClientSecret()
        const clientInfo = { name, url, redirectUri, logo, scopesRequested, email, accountId, clientSecret }
        const isValidClientInfo = ClientController.validateClientAppInfo()

        if (isValidClientInfo) {
          const clientAppsList = await ClientStore.listClientAppsByEmailId(email)
          const hasClientAppQuotaExceeded = (clientAppsList.length >= ClientController.MAX_CLIENT_APPS_PER_USER)

          if (!hasClientAppQuotaExceeded) {
            const result = await ClientStore.createClientApp(email, clientInfo)
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

  static async deleteAllClientAppsByAccountId(req, res, next) {
    res.status(200).json({})
  }
  static async getClientAppByAccountIdAndClientId(req, res, next) {
    res.status(200).json({})
  }
  static async updateClientAppByAccountIdAndClientId(req, res, next) {
    res.status(200).json({})
  }
  static async deleteClientAppByAccountIdAndClientId(req, res, next) {
    res.status(200).json({})
  }
}