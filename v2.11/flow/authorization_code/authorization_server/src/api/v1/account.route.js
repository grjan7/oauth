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

/**
 *  router
 *    .route('/signin/identifier')
 *    .post()
 *  router
 *    .route('/signin/challange')
 *    .post()
 * 
 *  router
 *    .route('/signin/challange/pwd')
 *    .post()
 * 
 *  router
 *    .route('/signin/identifier/dp')
 *    .post()
 * 
 * *  router
 *    .route('/signin/oauth/consent')
 *    .post()
 *
 * *  router
 *    .route('/signin/oauth/id')
 *    .post()
 * 
 * */
router
  .route('/signout')
  .get()
  .post()

export default router