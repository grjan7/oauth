'use strict'

import { ScopeStore } from '../../dao/v1/scopeStore.js'
import { LogStore } from '../../dao/v1/logStore.js'

export default class ScopeController {

  static validateScopeInfo(scopeInfo) {
    let isValid = false

    return isValid
  }

  static async addScope(req, res, next) {
    try {
      const scopeInfo = req.body
      const { resource, action } = scopeInfo
      const isScopeInfoValid = ScopeController.validateScopeInfo(scopeInfo)
      if (isScopeInfoValid) {
        const scope = await ScopeStore.getScopeByResourceAndAction(resource, action)
        if (scope.length == 0) {
          const result = await ScopeStore.addScope(scopeInfo)
          res.status(200).json({ status: `Scope with Id (${result.insertedId}) has been successfully added.` })
        } else {
          res.status(400).json({ status: `The scope is already exist.` })
        }
      } else {
        res.status(400).json({ status: `Invalid scope details.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listScopes(req, res, next) {
    try {
      const scopesList = await ScopeStore.listScopes()
      res.status(200).json(scopesList)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getScopeByScopeId(req, res, next) {
    try {
      const { scopeId } = req.params
      const scope = await ScopeStore.getScopeByScopeId(scopeId)
      res.status(200).json(scope)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateScopeByScopeId(req, res, next) {
    try {
      const { scopeId } = req.params
      const scopeData = req.body
      const result = await ScopeStore.updateScopeByScopeId(scopeId, scopeData)
      if (result.modifiedCount == 1) {
        res.status(200).json({ status: `scope is scuccessfully updated` })
      } else {
        res.status(400).json({ status: `The scopeId ${scopeId} does not exist.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteScopeByScopeId(req, res, next) {
    try {
      const { scopeId } = req.params
      await ScopeStore.deleteScopeByScopeId(scopeId)
      res.status(200).json({ status: `The scope ${scopeId} has been successfully deleted.` })
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllScopes(req, res, next) {
    try {
      const result = await ScopeStore.deleteAll()
      res.status(200).json({ status: `All scopes have been successfully deleted.` })
    } catch (e) {
      throw new Error(e)
    }
  }

}
