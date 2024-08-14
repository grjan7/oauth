'use strict'

let tokenStore

export class Token {
  constructor(token) {
    this.id = token.id
    this.clientID = token.clientID
    this.userID = token.userID
    this.redirectUri = token.redirectUri
    this.scopes = token.scopes
    this.codeChallange = token.codeChallange
    this.codeVerifier = token.codeVerifier
    this.challangeMethod = token.challangeMethod
    this.state = token.state
    this.nonce = token.nonce
    this.authorizationCode = token.authorizationCode
    this.accessToken = token.accessToken
    this.idToken = token.idToken
    this.authorizationCodeGeneratedTime = token.authorizationCodeGeneratedTime
    this.accessTokenGeneratedTime = token.accessTokenGeneratedTime
    this.idTokenGeneratedTime = token.idTokenGeneratedTime
    this.authorizationCodeExpiresAt = token.authorizationCodeExpiresAt
    this.accessTokenExpiresAt = token.accessTokenExpiresAt
    this.idTokenExpiresAt = token.idTokenExpiresAt
  }
}

export class TokenStore {
  static async init(db) {
    if (!tokenStore) {
      tokenStore = db.collection("tokenStore")
    }
  }
}
