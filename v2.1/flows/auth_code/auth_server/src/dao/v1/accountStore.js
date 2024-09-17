'use strict'

let accountStore

export class AccountUser {
  constructor(accountUser) {
    this.id = accountUser.id
    this.firstName = accountUser.firstName
    this.lastName = accountUser.lastName
    this.hashedPassword = accountUser.hashedPassword
    this.profileUrl = accountUser.profileUrl
    this.email = accountUser.email
    this.phone = accountUser.phone
    this.preferences = accountUser.preferences
  }
}

export class AccountStore {

  static async init(db) {
    if (accountStore) {
      return
    }
    try {
      accountStore = await db.collection("accountStore")
    } catch (e) {
      console.error(`Unable to establish collection handles in accountStore: ${e}`)
    }
  }

  static async createAccount(userInfo) {
    try {
      const result = await accountStore.insertOne(userInfo)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listAccounts() {
    try {
      const result = await accountStore.find({}).toArray()
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async findAccountByEmailId(email) {
    try {
      const result = await accountStore.findOne({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateAccountByEmailId(email) {
    try {
      const result = await accountStore.updateOne({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
  static async updateLastSessionByEmailId(sessionInfo) {
    try {
      sessionInfo["expiredAt"] = new Date().getTime()
      const { email } = sessionInfo
      const account = await accountStore.findOne({ email })
      const { lastSessions } = account
      let result
      if (!lastSessions) {
        result = await accountStore.updateOne({ email }, { $set: { lastSessions: [sessionInfo] } })
      } else {
        if (lastSessions.length < 10) {
          result = await accountStore.updateOne({ email }, { $push: { lastSessions: sessionInfo } })
        } else {
          lastSessions.shift()
          lastSessions.push(sessionInfo)
          result = await accountStore.updateOne({ email }, { $set: { lastSessions } })
        }
      }
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async changePassword(email, hashedPassword, newPasswordHash) {
    try {
      const result = await accountStore.updateOne({ email, hashedPassword }, { $set: { hashedPassword: newPasswordHash } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
  static async deleteAccountByEmailId(email) {
    try {
      const result = await accountStore.deleteOne({ email })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const result = await accountStore.updateOne({ email: oldEmail }, { $set: { email: newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateFirstnameByEmailId({ email, firstname }) {
    try {
      const result = await accountStore.updateOne({ email }, { $set: { firstname } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateLastnameByEmailId({ email, lastname }) {
    try {
      const result = await accountStore.updateOne({ email }, { $set: { lastname } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async emptyAccountStore() {
    try {
      const result = await accountStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }
}
