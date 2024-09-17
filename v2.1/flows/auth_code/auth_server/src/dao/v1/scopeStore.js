'use strict'

let scopeStore

export class Scope {
  constructor(scope) {
    this.id = scope.id
    this.resource = scope.resource
    this.action = scope.action
    this.description = scope.description
  }
}

export class ScopeStore {

  static async init(db) {
    if (!scopeStore) {
      scopeStore = db.collection("scopeStore")
    }
  }

  static async emptyScopeStore() {
    try {
      const result = await scopeStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }
}
