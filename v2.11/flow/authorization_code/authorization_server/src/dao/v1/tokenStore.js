'use strict'

let tokenStore

export class Token {

}

export class TokenStore {
  static async init(db) {
    if (!tokenStore) {
      tokenStore = db.collection("tokenStore")
    }
  }
}
