'use strict'

import { Router } from 'express'
import clientCtrl from './client.controller.js'
import accountCtrl from './account.controller.js'
import sessionCtrl from './session.controller.js'


const router = new Router()

router.route('/registerClientApp')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.registerClientAppByEmailId)

router.route('/listMyClientApps')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.listClientAppsByEmailId)

router.route('/getMyClientApp')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.getClientAppByClientIdAndEmailId
  )

router.route('/regenerateClientSecret')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientSecretByClientIdAndEmailId
  )

router.route('/updateRedirectUri')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateRedirectUriByClientIdAndEmailId
  )

router.route('/updateClientAppUrl')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientAppUrlByClientIdAndEmailId
  )

router.route('/updateClientAppLogoUrl')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientAppLogoUrlByClientIdAndEmailId
  )

router.route('/updateClientAppScopes')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientAppScopesByClientIdAndEmailId
  )

router.route('/updateClientAppName')
  .post(accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientAppNameByClientIdAndEmailId
  )

router.route('/deleteMyClientApp')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.deleteClientAppByClientIdAndEmailId)

router.route('/deleteMyClientApps')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.deleteAllClientAppsByEmailId
  )

export default router