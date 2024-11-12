'use strict'

import { Router } from 'express'
import scopeCtrl from './scopes.controller'

const router = new Router()

router.route('/listScopes')
  .post(scopeCtrl.listScopes)

router.route('/addScope')
  .post(scopeCtrl.addScope)

router.route('/deleteAllScopes')
  .post(scopeCtrl.deleteAllScopes)

router.route('/getScopeByScopeId/:scopeId')
  .post(scopeCtrl.getScopeByScopeId)

router.route('/updateScopeByScopeId/:scopeId')
  .post(scopeCtrl.updateScopeByScopeId)

router.route('/deleteScopeByScopeId/:scopeId')
  .post(scopeCtrl.deleteScopeByScopeId)

export default router