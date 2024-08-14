'use strict'

let clientStore

export class Client {

}

export class ClientStore {
  static async init(db) {
    if (!clientStore) {
      clientStore = db.collection("clientStore")
    }
  }
}
