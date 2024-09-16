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

  static async createToken(token) {
    try {
      const result = await tokenStore.insertOne(token)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateTokenWithAccessToken(tokenId, accessTokenInfo) {
    try {
      const result = await tokenStore.updateOne({ _id: ObjectId(tokenId) }, { $addFields: accessTokenInfo })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getTokenByTokenId(tokenId) {
    try {
      const result = await tokenStore.findOne({ _id: ObjectId(tokenId) })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listTokensByClientId(clientId) {
    try {
      const result = await tokenStore.find({ clientId })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listTokensByEmailId(email) {
    try {
      const result = await tokenStore.find({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteTokenByTokenId(tokenId) {
    try {
      const result = await tokenStore.deleteOne({ _id: ObjectId(tokenId) })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteTokenByEmailId(email) {
    try {
      const result = await tokenStore.deleteMany({ email })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteTokenByClientId(clientId) {
    try {
      const result = await tokenStore.deleteMany({ clientId })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async emptyTokenStore() {
    try {
      const result = await tokenStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }


  static async deleteAllTokensOwnedAndGrantedByEmailId(email) {
    try {
      const query = { $OR: [{ email }, { "user.email": email }] }
      const result = await tokenStore.deleteMany(query)
    } catch (e) {
      throw new Error(e)
    }
  }
}
