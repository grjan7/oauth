'use strict'

let tokens

export class Token {

}

export class TokenDAO {
  static async injectDB(conn) {
    if (!tokens) {
      tokens = conn.db(process.env.AUTH_DB_NAME).collection("tokens")
    }
  }
}
