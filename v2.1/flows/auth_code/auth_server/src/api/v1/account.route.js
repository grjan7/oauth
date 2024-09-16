'use strict'

import { Router } from 'express'
import accountCtrl from './account.controller.js'
import sessionCtrl from './session.controller.js'
import tokenCtrl from './token.controller.js'

const router = new Router()

// all routes in this module requires to 
// - be from same-origin
// - have valid session

// list accounts
router.route('/')
  .get(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.listAccounts)

// get account by email
router.route('/getAccountById')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.getAccountByEmailId)

// update account by email
router.route('/updateAccountById')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.updateAccountByEmailId)

// delete account by email
router.route('/deleteAccountById')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.deleteAccountByEmailId)


router.route('/settings/changePassword')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.changePasswordByEmailId
  )

router.route('/settings/updateEmailId')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.updateEmailByEmailId
  )

router.route('/settings/updateFirstName')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.updateFirstnameByEmailId
  )

router.route('/settings/updateLastName')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    accountCtrl.updateLastnameByEmailId
  )

router.route('/settings/security/listThirdPartyAccess')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    tokenCtrl.listClientAppsHasAccessByEmailId)


router.route('/settings/security/revokeAllClientAppsAccess')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    tokenCtrl.revokeAllClientAppsAccessByEmailId)

router.route('/settings/security/revokeClientAppAccess')
  .post(
    accountCtrl.isSameOrigin,
    sessionCtrl.validateSession,
    tokenCtrl.revokeClientAppAccessByEmailId)

//router.route('/settings/security/removeAllThirdPartyAccess')
//router.route('/settings/security/removeThirdPartyAccessByClientId')

export default router
