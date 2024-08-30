'use strict'

let clientStore

export class Client {
  contructor(client) {
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
}