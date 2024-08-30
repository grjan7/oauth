'use strict'

import dotenv from 'dotenv'
import { initDB } from './dao/v1/dbConfig.js'
import app from './server.js'

dotenv.config()
try {
  //await initDB()
} catch (e) {
  console.error(e)
} finally {
  app.listen(process.env.PORT, () => {
    console.log(`OAuth server is listening at ${process.env.PORT}`)
  })
}


