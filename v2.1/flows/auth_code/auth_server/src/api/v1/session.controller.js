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
        return sessionFindResult._id.toString()
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  // this middleware must be called before every protected endpoint handlers
  // validates the sessionId and redirects to sign in page when
  // - the cookie does not have `sessionId`
  // - the sessionId is invalid
  // - the sessionId does not belong to the user-agent

  static async validateSession(req, res, next) {
    const userAgentFromHeader = req.headers["user-agent"]
    const { sessionId } = req.cookies
    try {
      if (sessionId) {
        const session = await SessionStore.getSessionBySessionId(sessionId)
        if (session) {
          const { userAgent, email, accountId } = session
          if (userAgent == userAgentFromHeader) {
            req.body["email"] = email
            req.body["accountId"] = accountId
            next()
          } else {
            res.status(400).json(
              { status: `This session does not belong to this useragent ${userAgentFromHeader}` })
            //redirect('/signin/flow/default')
            return
          }
        } else {
          res.status(400).json(
            { status: `The sessionId ${sessionId} is not valid.` })
          //redirect('/signin/flow/default')
          return
        }
      } else {
        res.status(400).json(
          { status: `Missing required details` })
        //redirect('/signin/flow/default')
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