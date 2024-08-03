'use strict'

import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'


const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))


// app.use(cors())
process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
//app.use('/', express.static('public'))
app.use('/', express.static(join(__dirname, '../public')))

app.use('*', (req, res) => res.status(404).json({ error: 'Not Found!' }))


export default app

