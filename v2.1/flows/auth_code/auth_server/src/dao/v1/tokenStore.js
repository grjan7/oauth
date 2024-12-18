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
    if (tokenStore) {
      return
    }
    try {
      tokenStore = await db.collection("tokenStore")
    } catch (e) {
      console.error(`Unable to establish collection handles in tokenStore: ${e}`)
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
      const query = { _id: ObjectId(tokenId) }
      const updateOperation = { $addFields: accessTokenInfo }
      const result = await tokenStore.updateOne(query, updateOperation)
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

  static async deleteTokenByClientId(email, clientId) {
    try {
      const result = await tokenStore.deleteMany({ email, clientId })
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

  // delete tokens that are owned by all client Apps that are created by the account
  static async deleteAllTokensOwnedByEmailId(email) {
    try {
      const query = { email }
      const result = await tokenStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  // this is used at the time of deleting an account

  static async deleteAllTokensOwnedAndGrantedByEmailId(email) {
    try {
      const query = { $OR: [{ email }, { "user.email": email }] }
      const result = await tokenStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  // update email when you update the email of the account

  static async updateAppEmailByEmailId(oldEmail, newEmail) {
    try {
      const result = await tokenStore.updateMany({ email: oldEmail }, { $set: { email: newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  // update user.email when you update the email of the account  

  static async updateUserEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const result = await tokenStore.updateMany({ "user.email": oldEmail }, { $set: { "user.email": newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateTokenWithUser(tokenId, user) {
    try {
      const result = await tokenStore.updateOne({ _id: new ObjectId(tokenId) }, { $set: { user } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateTokenWithAuthorizationCode(tokenId, authorizationCode) {
    try {
      const query = { _id: new ObjectId(tokenId) }
      const action = { $set: { authorizationCode } }
      const result = await tokenStore.updateOne(query, action)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  // lists the client apps that has access to the account 
  static async listClientAppsHasAccessByEmailId(email) {
    try {
      const pipeline = [{
        $match: {
          "user.email": email
        }
      },
      {
        $project: {
          clientId: 1,
          clientAppName: 1
        }
      }]
      const result = await tokenStore.aggregate(pipeline)
      return result.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  // list all tokens GRANTED by the account

  static async listTokensByEmailId(email) {
    try {
      const pipeline = [{
        $match: {
          "user.email": email
        }
      }]
      const result = await tokenStore.aggregate(pipeline)
      return result.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  // revoke one third-party access GRANTED by the account
  static async revokeClientAppAccessGrantedByEmailId(email, clientId) {
    try {
      const query = {
        "user.email": email,
        clientId
      }
      await tokenStore.deleteOne(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  // revoke all third-party access GRANTED by the account

  static async revokeAllClientAppsAccessGrantedByEmailId(email) {
    try {
      const query = {
        "user.email": email
      }
      await tokenStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  // deletes all client apps' tokens OWNED by the account

  static async deleteAllTokensOwnedByEmailId(email) {
    try {
      const query = { email }
      await tokenStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  // delete one client app tokens OWNED by the account
  static async deleteTokensOwnedByClientIdAndEmailId(email, clientId) {
    try {
      const query = { email, clientId }
      await tokenStore.deleteMany(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

}
