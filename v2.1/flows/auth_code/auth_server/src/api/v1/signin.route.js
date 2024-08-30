'use strict'

import { Router } from 'express'
import signinCtrl from './signin.controller.js'

const router = new Router()

router
  .route('/flow/default')
  .post(signinCtrl.authenticateUser)

router
  .route('/flow/oauth')
  .post(signinCtrl.authenticateUser)

export default router