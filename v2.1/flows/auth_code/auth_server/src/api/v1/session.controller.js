'use strict'

import { SessionStore } from '../../dao/v1/sessionStore.js'

export default class SessionController {

  static async createSession(req, sessionOwner) {
    const { userAgent } = req.headers
    const session = { userAgent, ...sessionOwner }
    try {
      const sessionFindResult = await SessionStore.getSessionByEmailId(session.email)
      if (sessionFindResult == null) {
        const sessionCreationResult = await SessionStore.createSession(session)
        return sessionCreationResult.insertionId.toString()
      } else {
        sessionFindResult._id.toString()
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async validateSession(req, res, next) {

  }

  static async getSessionBySessionId(req, res, next) {
    next()
  }

  static async listSessionsByEmailId(req, res, next) {
    next()
  }

  static async deleteSessionBySessionId(req, res, next) {
    next()
  }

}