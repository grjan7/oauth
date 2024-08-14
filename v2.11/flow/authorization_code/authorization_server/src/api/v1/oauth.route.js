'use strict'

import { Router } from 'express'

const router = new Router()

/**
 * - validate the request parameters (clientID, redirectUri, scopes) * 
 *    - clientStore.findClientById(clientID)
 *    - oauthCtrl.validateClient({clientID, redirectUri, Scopes}) 
 * - if valid, present the signin page
 *    - create token in the token store with
 *      {
 *        tokenID
 *        clientID,
 *        code_challange,
 *        challange_method,
 *        redirect_uri
 *        state,
 *        nonce 
 *      }
 *    - redirect the user to oauth/sign-in page
 *    - authenticate the user 
 *    - on success, update the userID to the token
 *      {
 *       tokenID
 *       clientID,
 *       userID
 *      }  
 * - on successful sign-in, prompt the permissions requested by the client app
 * - on successful authorization, `POST /permissions`
 *     - generate authorization_code
 *     - update the token with authorization_code and scopes authorized
 *  {
 *   clientID,
 *   authorizationCode
 *   scopes
 *  }
 * 
 * - Now, the token will be like
 * 
 *  {
 *    tokenID
 *    authorizationCode,
 *    clientID,
 *    code_challange,
 *    challange_method
 *    userID,
 *    redirectUri,
 *    state,
 *    nonce,
 *    scopes
 *  }
 *  on failure, delete the token
 * - finally, post the `authorization_code` to the redirectUri with `state` and `nonce`
 * 
 */
router.route('/auth')
  .post()

router.route('/token')
  .post() // code exchange for token
  .delete() // revoke token

