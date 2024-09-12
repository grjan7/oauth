'use strict'

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import express from 'express'
import accountCtrl from './account.controller.js'
import sessionCtrl from './session.controller.js'

const { Router } = express
const router = new Router()

router
  .route('/signin/flow/default')
  .post(accountCtrl.signin)

router
  .route('/signin/flow/oauth')
  .post(accountCtrl.signin)

router
  .route('/signup')
  .post(
    accountCtrl.isSameOrigin,
    accountCtrl.validateUserInfo,
    accountCtrl.register
  )

router
  .route('/signout')
  .post(sessionCtrl.validateSession, accountCtrl.signout)

/*
router.route('/auth')
.post()

router.route('/token')
.post() // code exchange for token
.delete() // revoke token

*/

const __dirname = dirname(fileURLToPath(import.meta.url))

const libPage = join(__dirname, '../../../views/lib')
const appPage = join(__dirname, '../../../views/pages/app')
const signupPage = join(__dirname, '../../../views/pages/signup')
const signinPage = join(__dirname, '../../../views/pages/signin')
const oauthSigninPage = join(__dirname, '../../../views/pages/oauth-signin')

router.use('/lib', express.static(libPage))
router.use('/app/home', express.static(appPage))
router.use('/signup', express.static(signupPage))
router.use('/signin/flow/default', express.static(signinPage))
router.use('/signin/flow/oauth', express.static(oauthSigninPage))


router.use('/app', (req, res, next) => res.redirect('/app/home'))
router.use('/signout', (req, res, next) => res.redirect('/'))
router.use('/', (req, res, next) => res.redirect('/signin/flow/default'))

export default router