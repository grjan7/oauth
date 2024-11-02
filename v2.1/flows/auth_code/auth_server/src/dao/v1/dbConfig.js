'use strict'

import { MongoClient } from 'mongodb'
import { AccountStore } from './accountStore.js'
import { SessionStore } from './sessionStore.js'
import { ClientStore } from './clientStore.js'
import { ScopeStore } from './scopeStore.js'
import { TokenStore } from './tokenStore.js'
import { LogStore } from './logStore.js'

export const initDB = async () => {
  const mongodbURL = process.env.AUTH_DB_URI
  const client = new MongoClient(mongodbURL)
  try {
    const conn = await client.connect()
    console.log(`Successfully connected to db.`)
    const db = conn.db(process.env.AUTH_DB_NAME)
    // initialize collections
    await LogStore.init(db)
    await AccountStore.init(db)
    await SessionStore.init(db)
    await ClientStore.init(db)
    await ScopeStore.init(db)
    await TokenStore.init(db)
  } catch (err) {
    console.log(err.stack)
    process.exit(1)
  }
}