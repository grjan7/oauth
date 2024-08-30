'use strict'

import { Router } from 'express'
import signupCtrl from './signup.controller.js'

const router = new Router()

router
  .route('/')
  .post(signupCtrl.addUser)

export default router