'use strict'

import { ScopeStore } from '../../dao/v1/scopeStore.js'
import sessionCtrl from './session.controller.js'
import { LogStore } from '../../dao/v1/logStore.js'


export default class SessionController {

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
      const { scopeId } = req.body
      const scope = await ScopeStore.getScopeById(scopeId)
      res.status(200).json(scope)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateScopeByScopeId(req, res, next) {
    try {
      const { scopeId, scopeData } = req.body
      const result = await ScopeStore.updateScopeById(scopeId, scopeData)

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
      const { scopeId } = req.body
      await ScopeStore.deleteScopeById(scopeId)
      res.status(200).json({ status: `The scopeId ${scopeId} has been successfully deleted.` })
    } catch (e) {
      throw new Error(e)
    }
  }


}
