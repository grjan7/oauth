'use strict'

import { Router } from 'express'
import clientCtrl from './client.controller.js'

const router = new Router()

router.route('/')
  .get(clientCtrl.listClientAppsByAccountId)
  .post(clientCtrl.createClientAppForAccountId)
  .delete(clientCtrl.deleteAllClientAppsByAccountId)

router.route('/:clientId')
  .get(clientCtrl.getClientAppByAccountIdAndClientId)
  .put(clientCtrl.updateClientAppByAccountIdAndClientId)
  .delete(clientCtrl.deleteClientAppByAccountIdAndClientId)



export default router