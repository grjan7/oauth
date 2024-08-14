'use strict'

let sessionStore

export class Session {

}

export class SessionStore {
  static async init(db) {
    if (!sessionStore) {
      sessionStore = db.collection("sessionStore")
    }
  }
}
