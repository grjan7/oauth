'use strict'

import { Router } from 'express'
import accountCtrl from './accountCtrl.controller.js'

const router = new Router()

router
  .route('/register')
  .get(accountCtrl.apiGetRegisterPage)
  .post()

router
  .route('/signin')
  .get()
  .post()

router
  .route('/signout')
  .get()
  .post()

export default router