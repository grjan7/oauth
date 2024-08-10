'use strict'

import { Router } from 'express'
import clientsCtrl from './client.controller.js'

const router = new Router()

router.route('/')
  .get(clientsCtrl.listClientApps)
  .post(clientsCtrl.createClientApp)

router.route('/:clientId')
  .get(clientsCtrl.getClientAppById)
  .put(clientCtrl.updateClientAppById)
  .delete(clientsCtrl.deleteClientAppById)
