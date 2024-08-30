'use strict'

import { Router } from 'express'
import signoutCtrl from './signout.controller.js'

const router = new Router()

router
  .route('/')
  .post(signoutCtrl.signoutSession)

export default router