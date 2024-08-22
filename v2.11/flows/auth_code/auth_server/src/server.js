'use strict'

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import morgan from 'morgan'

import accounts from './api/v1/account.route.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const signupPage = join(__dirname, '../views/pages/signup')
const signinPage = join(__dirname, '../views/pages/signin')
const signoutPage = join(__dirname, '../views/pages/signout')

// middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))

const validateFlow = async (req, res, next) => {
  const { flowName } = req.params
  const isValidFlow = flowName == 'default' || flowName == 'oauth'
  if (!isValidFlow) {
    res.status(400).json({ error: "invalid flow" })
    return
  }
  next()
}
// routes
app.use('/account', accounts)
app.use('/signup', express.static(signupPage))
app.use('/signin/flow/:flowName', validateFlow, express.static(signinPage))
app.use('/signout', express.static(signoutPage))
app.use('/', (req, res, next) => res.redirect('/signin/flow/default'))

// handle errors
app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured!!")
  next()
})

export default app


