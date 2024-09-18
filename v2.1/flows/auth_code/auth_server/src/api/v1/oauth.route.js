'use strict'

import { Router } from 'express'
import oauthCtrl from './oauth.controller.js'

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
 * 
 *        tokenInfo = tokenID + clientID + userID + code_challange + state + now_in_ms
 *        authorizationCode = createHash(tokenInfo)
 * 
 *     - update the token with authorization_code and scopes authorized
 *  {
 *   clientID,
 *   authorizationCode
 *   authorizationCodeGeneratedTime
 *   scopes
 *  }
 * 
 * - Now, the token will be like
 * 
 *  {
 *    tokenID
 *    authorizationCode,
 *    authorizationCodeGeneratedTime,
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
  .get(oauthCtrl.validateAuthorizeRequest, oauthCtrl.authorize)
  .post(oauthCtrl)


/**
 * - post /token with
 *  {
 *    authorization_code,
 *    code_verifier,
 *    clientID,
 *    clientSecret
 *    redirectUri,
 *    nonce
 *  }
 * 
 * - validate request parameter
 * - match clientID
 * - match hashed clientSecret against the clientSecret in the clientStore
 * - match hashed code_verifier with code_challange
 * - validate nonce for number of attempts
 * - on successful validation of token request, generate accessToken
 * - store the access_token to the token where `authorization_code`, `client_id` and code_verifier matche
 *  {
 *    tokenID
 *    authorizationCode,
 *    clientID,
 *    code_challange,
 *    challenge_method,
 *    code_verifier,
 *    accessToken,
 *    authorizationCodeGeneratedTime,
 *    accessTokenGeneratedTime,
 *    userID,
 *    redirectUri,
 *    state,
 *    nonce,
 *    scopes
 *  }
 * - respond with accessToken
 */
router.route('/token')
  .post() // code exchange for token
  .delete() // revoke token

export default router