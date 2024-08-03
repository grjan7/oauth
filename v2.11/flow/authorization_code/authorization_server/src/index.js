'use strict'

import app from './server.js'
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT,
  () => console.log(`OAuth server is listening at ${process.env.PORT}`))