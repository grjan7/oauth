'use strict'

let scopes

export class Scope {

}

export class ScopeDAO {
  static async injectDB(conn) {
    if (!scopes) {
      scopes = conn.db(process.env.AUTH_DB_NAME).collection("scopes")
    }
  }
}
