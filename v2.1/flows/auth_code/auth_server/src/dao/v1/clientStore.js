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

  static async findClientAppByClientIdAndEmailId(clientId) {
    try {
      const result = await clientStore.findOne({ email, clientId })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientAppByClientId(clientId) {
    try {
      const result = await clientStore.updateOne({ clientId })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteClientAppByClientId(clientId) {
    try {
      const result = await clientStore.deleteOne({ clientId })
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

  static async updateClientAppsEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const result = await clientStore.updateMany({ email: oldEmail }, { $set: { email: newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

}