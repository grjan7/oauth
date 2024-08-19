'use strict'

let logStore

export class Log {
  constructor(log) {
    this.id = log.id
    this.message = log.id
    this.clientId = log.clientId
  }
}

export class LogStore {
  static async init(db) {
    if (!logStore) {
      logStore = db.collection("logStore")
    }
  }
}
