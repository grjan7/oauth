'use strict'

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
}
