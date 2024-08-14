'use strict'

let scopeStore

export class Scope {

}

export class ScopeStore {
  static async init(db) {
    if (!scopeStore) {
      scopeStore = db.collection("scopeStore")
    }
  }
}
