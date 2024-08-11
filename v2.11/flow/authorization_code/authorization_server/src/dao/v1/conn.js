'use strict'

import { MongoClient } from 'mongodb'
import { UserDAO } from './userDAO.js'
import { SessionDAO } from './sessionDAO.js'
import { ClientAppDAO } from './clientAppDAO.js'
import { ScopeDAO } from './scopeDAO.js'
import { TokenDAO } from './tokenDAO.js'

export const initDB = async () => {
  const mongodbURL = process.env.AUTH_DB_URI
  const client = new MongoClient(mongodbURL)
  try {
    const conn = await client.connect()
    // initialize database and its collections
    await UserDAO.injectDB(conn)
    await SessionDAO.injectDB(conn)
    await ClientAppDAO.injectDB(conn)
    await ScopeDAO.injectDB(conn)
    await TokenDAO.injectDB(conn)
  } catch (err) {
    console.log(err.message)
  } finally {
    await client.close()
  }
}