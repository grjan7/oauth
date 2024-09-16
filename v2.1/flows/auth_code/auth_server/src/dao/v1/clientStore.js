'use strict'

let clientStore

export class Client {
  constructor(client) {
    this.userID = client.userID
    this.name = client.name
    this.clientID = client.clientID
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

  static async createClient(clientInfo) {
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

  static async findClientByClientId(clientId) {
    try {
      const result = await clientStore.findOne({ clientId })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientByClientId(clientId) {
    try {
      const result = await clientStore.updateOne({ clientId })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteClientByClientId(clientId) {
    try {
      const result = await clientStore.deleteOne({ clientId })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllClientsByEmailId(email) {
    try {
      const result = await clientStore.deleteMany({ email })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateClientsEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const result = await clientStore.updateMany({ email: oldEmail }, { $set: { email: newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

}