'use strict'

import { MongoClient } from 'mongodb'

const mongodbURL = process.env.OAUTH_DB_URI
const client = new MongoClient(mongodbURL)
let dbConnection

try {
  dbConnection = await client.connect()
} catch (err) {
  console.log(err.message)
} finally {
  await client.close()
}


export default dbConnection