'use strict'

import { Router } from 'express'
import signinCtrl from './signin.controller.js'



const router = new Router()

router
  .route('/flow/default')
  .post(signinCtrl.validateUser)

router
  .route('/flow/oauth')
  .post(signinCtrl.validateUser)

export default router