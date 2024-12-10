'use strict'

import { Router } from 'express'
import clientCtrl from './client.controller.js'
import accountCtrl from './account.controller.js'
import sessionCtrl from './session.controller.js'


const router = new Router()

router.route('/listClientAppsByEmailId')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.listClientAppsByEmailId)

router.route('/registerClientAppByEmailId')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.registerClientAppByEmailId)

router.route('/deleteClientAppsByEmailId')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.deleteClientAppsByEmailId)

router.route('/getClientAppByClientIdAndEmailId')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.getClientAppByClientIdAndEmailId
  )


/*
router.route('/:clientId')
  .get(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.getClientAppByEmailIdAndClientId)
  .put(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.updateClientAppByEmailIdAndClientId)
  .delete(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.deleteClientAppByEmailIdAndClientId)

*/
export default router