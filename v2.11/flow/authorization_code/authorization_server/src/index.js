'use strict'

import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

process.env.NODE_ENV != 'prod' && app.use(morgan('dev'))

// app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/', express.static(join(__dirname, '../public')))
app.use((err, req, res, next) => {
  res.status(500).send("An unexpected error occured!!")
})
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found!' }))


app.listen(process.env.PORT, () => {
  console.log(`OAuth server is listening at ${process.env.PORT}`)
})



