'use strict'

import { Router } from 'express'
import scopeCtrl from './scopes.controller'

const router = new Router()

router.route('/')
  .get(scopeCtrl.listScopes)
  .post(scopeCtrl.addScope)
  .delete(scopeCtrl.deleteAllScopes)

router.route('/:scopeId')
  .get(scopeCtrl.getScopeByScopeId)
  .update(scopeCtrl.updateScopeByScopeId)
  .delete(scopeCtrl.deleteScopeByScopeId)

export default router