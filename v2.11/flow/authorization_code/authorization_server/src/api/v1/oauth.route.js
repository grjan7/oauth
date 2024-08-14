'use strict'

import { Router } from 'express'

const router = new Router()

/**
 * - validate the request parameters (clientID, redirectUri, scopes)
 * - if valid, present the signin page 
 * - on successful sign-in, prompt the permissions requested by the client app
 * - on successful authorization, create authorization code and store it
 *  to the tokenStore
 * 
 *  {
 *   clientID,
 *   authorizationCode,
 *   redirectUri,
 *   scopes,
 *   code_challange,
 *   challange_method,
 *   state,
 *   nonce
 *  }
 * 
 * - finally, post the `authorization_code` to the redirectUri with `state` and `nonce`
 * 
 */
router.route('/auth')
  .post()

router.route('/token')
  .post() // code exchange for token
  .delete() // revoke token

