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

// middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))

// routes
app.use('/account', accounts)
app.use('/', express.static(join(__dirname, '../public')))

// handle errors 
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found!' }))
app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured!!")
})

export default app


