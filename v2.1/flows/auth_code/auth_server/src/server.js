'use strict'

import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import cookieparser from 'cookie-parser'
import morgan from 'morgan'

import root from './api/v1/root.route.js'
import account from './api/v1/account.route.js'
import client from './api/v1/client.route.js'
import logger from './api/v1/logger.route.js'
import scopes from './api/v1/scopes.route.js'

const app = express()

// middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieparser())

process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))

// routes
app.use('/account', account)
app.use('/client', client)
app.use('/log', logger)
app.use('/scopes', scopes)
app.use('/', root)
app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured!!")
  next()
})

export default app


//app.use('/signout', express.static(signoutPage))
/**
 * sign out requires accountID, sessionID and client details for 
 * confirming the account owner is the one who initiated sign out request
 * 
 * /account/accountID/signout?sessionID=1616dsdas3c
 * 
 * likewise deleting an account requires accountID, sessionID, client details
 * 
 * including client app management 
 * 
 
const validateFlow = async (req, res, next) => {
  const { flowName } = req.params
  const isValidFlow = flowName == 'default' || flowName == 'oauth'
  if (!isValidFlow) {
    res.status(400).json({ error: "invalid flow" })
    return
  }
  next()
}
*/



