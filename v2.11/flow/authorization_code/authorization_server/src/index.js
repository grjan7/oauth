'use strict'

import app from './server.js'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'

dotenv.config();
const mongodbURL = process.env.OAUTH_DB_URI;
const client = new MongoClient(mongodbURL);

(async () => {
  try {
    await client.connect()
    const accountCollection = client.db("oauth").collection("account")
    await accountCollection.insertOne({ email: "jdhff@gmail.com" })
    app.listen(process.env.PORT,
      () => console.log(`OAuth server is listening at ${process.env.PORT}`))
  } catch (err) {
    throw new Error(err)
  } finally {
    await client.close()
  }
})()
