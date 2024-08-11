'use strict'

let sessions

export class Session {

}

export class SessionDAO {
  static async injectDB(conn) {
    if (!sessions) {
      sessions = conn.db(process.env.AUTH_DB_NAME).collection("sessions")
    }
  }
}
