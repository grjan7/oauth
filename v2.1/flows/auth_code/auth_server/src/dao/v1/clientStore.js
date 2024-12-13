'use strict'

let clientStore

export class Client {
  constructor(client) {
    this.email = client.email
    this.name = client.name
    this.clientId = client.clientId
    this.clientSecret = client.clientSecret
    this.redirectUri = client.redirectUri
    this.scopes = client.scopes
    this.logoUrl = client.logoUrl
  }
}

export class ClientStore {
  static async init(db) {
    if (!clientStore) {
      clientStore = db.collection("clientStore")
    }
  }

  static async createClientApp(clientInfo) {
    try {
      const result = await clientStore.insertOne(clientInfo)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listClientAppsByEmailId(email) {
    try {
      const pipeline = [{ $match: { email } }]
      const result = await clientStore.aggregate(pipeline)
      return result.toArray()
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getClientAppByClientIdAndEmailId(email, clientId) {
    try {
      const result = await clientStore.findOne({ email, _id: new ObjectId(clientId) })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  /*
    static async getClientAppByClientId(clientId) {
      try {
        const result = await clientStore.findOne({ _id: new ObjectId(clientId) })
        return result
      } catch (e) {
        throw new Error(e)
      }
    }
  */

  static async updateClientSecretByClientIdAndEmailId(clientId, email, clientSecret) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { clientSecret } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateRedirectUriByClientIdAndEmailId(clientId, email, redirectUri) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { redirectUri } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientAppUrlByClientIdAndEmailId(clientId, email, url) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { url } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientAppLogoUrlByClientIdAndEmailId(clientId, email, logoUrl) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { logoUrl } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientAppScopesByClientIdAndEmailId(clientId, email, scopes) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { scopes } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientAppNameByClientIdAndEmailId(clientId, email, name) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const updateFields = { $set: { name } }
      const result = await clientStore.updateOne(query, updateFields)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  // changing emailId will be a vulnerability
  /*  
    static async updateClientAppsEmailByEmailId(oldEmail, newEmail) {
      try {
        const result = await clientStore.updateMany({ email: oldEmail }, { $set: { email: newEmail } })
        return result
      } catch (e) {
        throw new Error(e)
      }
    }
  */

  static async deleteClientAppByClientIdAndEmailId(clientId, email) {
    try {
      const query = { _id: new ObjectId(clientId), email }
      const result = await clientStore.deleteOne(query)
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllClientAppsByEmailId(email) {
    try {
      const result = await clientStore.deleteMany({ email })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async emptyClientStore() {
    try {
      const result = await clientStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

}