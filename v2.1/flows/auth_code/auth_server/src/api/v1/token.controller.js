'use strict'

import { TokenStore } from '../../dao/v1/tokenStore.js'

export default class TokenController {

  static async listTokensByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = await TokenStore.listTokensByEmailId(email)
        return result
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }


  // Lists the client apps (third-party apps) that user has granted access to

  static async listClientAppsHasAccessByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = await TokenStore.listClientAppsHasAccessByEmailId(email)
        return result
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async revokeClientAppAccessByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const { clientId } = req.body
        const result = await TokenStore.revokeClientAppAccessGrantedByEmailId(email, clientId)
        return result
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async revokeAllClientAppsAccessByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = await TokenStore.revokeAllClientAppsAccessGrantedByEmailId(email)
        return result
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async revokeAccessToClientApp(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const { clientId } = req.body
        const result = await TokenStore.revokeAccessToClientApp(clientId)
        return result
      } else {
        res.status(400).json({ status: `Invalid session.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async createTokensByAccountId(req, res, next) {
    res.status(200).json({})
  }

  static async deleteTokensByAccountId(req, res, next) {
    res.status(200).json({})
  }

  static async getTokenByTokenId(req, res, next) {
    res.status(200).json({})
  }

  static async deleteTokenByTokenId(req, res, next) {
    res.status(200).json({})
  }

}