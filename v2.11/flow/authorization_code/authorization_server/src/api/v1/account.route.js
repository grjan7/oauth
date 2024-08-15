'use strict'

import { Router } from 'express'
import accountCtrl from './accountCtrl.controller.js'

const router = new Router()

router.route('/lifecycle/steps/signup/name')
  .get(accountCtrl.apiGetRegisterPage)
  .post()

router.route('/lifecycle/steps/signup/birthdaygender')
  .get(accountCtrl.apiGetRegisterPage)
  .post()

router.route('/lifecycle/steps/signup/username')
  .get(accountCtrl.apiGetRegisterPage)
  .post()

router.route('/lifecycle/steps/signup/password')
  .get(accountCtrl.apiGetRegisterPage)
  .post()


router.route('/signin')
  .get()
  .post()

router.route('/signin/identifier')
  .get()
  .post()

router.route('/signin/challange')
  .get()
  .post()

router.route('/signin/challange/pwd')
  .get()
  .post()

router.route('/signin/identifier/dp')
  .get()
  .post()

router.route('/signin/oauth/consent')
  .get()
  .post()

router.route('/signin/oauth/id')
  .get()
  .post()

router.route('/signout')
  .get()
  .post()

export default router