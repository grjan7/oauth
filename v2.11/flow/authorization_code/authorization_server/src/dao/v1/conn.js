'use strict'

import { MongoClient } from 'mongodb'
import { UserDAO } from './userDAO.js'

export const initDB = async () => {
  const mongodbURL = process.env.AUTH_DB_URI
  const client = new MongoClient(mongodbURL)
  try {
    const conn = await client.connect()
    // initialize database and its collections
    await UserDAO.injectDB(conn)
  } catch (err) {
    console.log(err.message)
  } finally {
    await client.close()
  }
}