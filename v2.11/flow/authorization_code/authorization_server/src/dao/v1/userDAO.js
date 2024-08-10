'use strict'

let users, sessions

export class User {

}

export class UserDAO {
  static async injectDB(conn) {
    if (!users) {
      users = conn.db(process.env.AUTH_DB_NAME).collection("users")
    }
    if (!sessions) {
      sessions = conn.db(process.env.AUTH_DB_NAME).collection("sessions")
    }
  }
}
