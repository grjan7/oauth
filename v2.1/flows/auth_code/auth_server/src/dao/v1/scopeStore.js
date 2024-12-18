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
    if (scopeStore) {
      return
    }
    try {
      scopeStore = await db.collection("scopeStore")
    } catch (e) {
      console.error(`Unable to establish collection handles in scopeStore: ${e}`)
    }
  }

  static async addScope(scopeInfo) {
    try {
      const result = await scopeStore.insertOne(scopeInfo)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listScopes() {
    try {
      const scopesList = await scopeStore.find({})
      return scopesList.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getScopeByResourceAndAction(resource, action) {
    try {
      const scope = await scopeStore.find({ resource, action })
      return scope
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getScopeByScopeId(scopeId) {
    try {
      const scope = await scopeStore.findOne({ _id: new ObjectId(scopeId) })
      return scope
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateScopeByScopeId(scopeId, scopeData) {
    try {
      const query = { _id: new ObjectId(scopeId) }
      const updateAction = { $set: scopeData }
      const result = await scopeStore.updateOne(query, updateAction)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteScopeByScopeId(scopeId) {
    try {
      const query = { _id: new ObjectId(scopeId) }
      const result = await scopeStore.deleteOne(query)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAll() {
    try {
      const result = await scopeStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }
}
