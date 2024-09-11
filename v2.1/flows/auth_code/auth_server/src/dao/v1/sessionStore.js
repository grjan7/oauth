'use strict'

import { ObjectId } from "mongodb"

let sessionStore

export class Session {
  constructor(session) {
    this.id = session.id
    this.cookie = session.cookie
    this.userID = session.userID
  }
}

export class SessionStore {
  static async init(db) {
    if (!sessionStore) {
      sessionStore = db.collection("sessionStore")
    }
  }

  static async createSession(session) {
    try {
      const result = await sessionStore.insertOne(session)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getSessionBySessionId(sessionId) {
    try {
      const result = await sessionStore.findOne({ _id: new ObjectId(sessionId) })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getSessionByEmailId(email) {
    try {
      const result = await sessionStore.findOne({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listSessionsByEmailId(email) {
    try {
      const result = await sessionStore.find({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteSessionBySessionId(sessionId) {
    try {
      const result = await sessionStore.deleteOne({ _id: ObjectId(sessionId) })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

}
