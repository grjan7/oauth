'use strict'

import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import path from 'node:path'

const app = express()
// app.use(cors())
process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, "../public")))
app.use('*', (req, res) => res.status(400).json({ error: 'Not Found!' }))

export default app

