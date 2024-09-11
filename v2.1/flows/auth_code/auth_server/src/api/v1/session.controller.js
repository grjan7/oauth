'use strict'

import { SessionStore } from '../../dao/v1/sessionStore.js'

export default class SessionController {

  static async createSession(req, sessionOwner) {
    const userAgent = req.headers["user-agent"]
    const session = { userAgent, ...sessionOwner }
    try {
      const sessionFindResult = await SessionStore.getSessionByEmailId(session.email)
      if (!sessionFindResult) {
        const sessionCreationResult = await SessionStore.createSession(session)
        return sessionCreationResult.insertedId.toString()
      } else {
        sessionFindResult._id.toString()
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async validateSession(req, res, next) {
    console.log("I am ValidateSession")
    const userAgent = req.headers["user-agent"]
    const { sessionId } = req.cookies
    try {
      const session = await SessionStore.getSessionBySessionId(sessionId)
      if (session) {
        if (session.userAgent == userAgent) {
          next()
        } else {
          res.status(400).redirect('/signin/flow/default')
          return
        }
      } else {
        res.status(400).redirect('/signin/flow/default')
        return
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getSessionBySessionId(req, res, next) {
    next()
  }

  static async listSessionsByEmailId(req, res, next) {
    next()
  }

  static async deleteSessionBySessionId(req) {
    const { sessionId } = req.cookies
    try {
      await SessionStore.deleteSessionBySessionId(sessionId)
    } catch (e) {
      throw new Error(e)
    }
  }

}