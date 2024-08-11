'use strict'

let clients

export class Client {

}

export class ClientDAO {
  static async injectDB(conn) {
    if (!clients) {
      clients = conn.db(process.env.AUTH_DB_NAME).collection("clients")
    }
  }
}
