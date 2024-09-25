'use strict'

import { Router } from 'express'
import clientCtrl from './client.controller.js'
import accountCtrl from './account.controller.js'
import sessionCtrl from './session.controller.js'


const router = new Router()

router.route('/')
  .get(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.listClientAppsByEmailId)
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.registerClientApp)
  .delete(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    clientCtrl.deleteClientAppsByEmailId)

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


export default router