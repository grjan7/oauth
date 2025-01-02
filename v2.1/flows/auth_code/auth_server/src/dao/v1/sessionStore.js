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
    if (sessionStore) {
      return
    }
    try {
      sessionStore = await db.collection("sessionStore")
    } catch (e) {
      console.error(`Unable to establish collection handles in sessionStore: ${e}`)
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
      const query = { _id: ObjectId.createFromHexString(sessionId) }
      const result = await sessionStore.findOne(query)
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

  static async updateEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const query = { email: oldEmail }
      const updateOperation = { $set: { email: newEmail } }
      const result = await sessionStore.updateOne(query, updateOperation)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteSessionBySessionId(sessionId) {
    try {
      const query = { _id: ObjectId.createFromHexString(sessionId) }
      const result = await sessionStore.deleteOne(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteSessionByEmailId(email) {
    try {
      const query = { email }
      const result = await sessionStore.deleteOne(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async emptySessionStore() {
    try {
      const query = {}
      const result = await sessionStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }
}
