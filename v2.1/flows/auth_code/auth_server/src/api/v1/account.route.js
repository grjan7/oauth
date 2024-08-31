'use strict'

import { Router } from 'express'
import accountCtrl from './account.controller.js'

import logCtrl from './logger.controller.js'


const router = new Router()

router.route('/')
  .get(accountCtrl.listAccounts)

router.route('/:accountId')
  .get(accountCtrl.getAccountById)
  .put(accountCtrl.updateAccountById)
  .delete(accountCtrl.deleteAccountById)

export default router

/*router.route('/lifecycle/steps/signup/name')
  .get(accountCtrl.getSignUpName)
  .post(accountCtrl.postSignUpName)

router.route('/lifecycle/steps/signup/birthdaygender')
  .get(accountCtrl.getSignUpBirthdayGender)
.post()

router.route('/lifecycle/steps/signup/username')
.get(accountCtrl.apiGetRegisterPage)
.post()

router.route('/lifecycle/steps/signup/password')
.get(accountCtrl.apiGetRegisterPage)
.post()


router.route('/signin')
.get()

router.route('/signin/identifier')
.get()
.post()

router.route('/signin/challange/pwd')
.get()
.post()

router.route('/signin/challange/dp')
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
*/