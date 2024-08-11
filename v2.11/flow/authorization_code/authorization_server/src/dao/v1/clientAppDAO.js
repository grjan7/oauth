'use strict'

let clientApps

export class ClientApp {

}

export class ClientAppDAO {
  static async injectDB(conn) {
    if (!clientApps) {
      clientApps = conn.db(process.env.AUTH_DB_NAME).collection("clientApps")
    }
  }
}
