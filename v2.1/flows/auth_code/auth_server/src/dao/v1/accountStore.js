'use strict'

let accountStore

export class AccountUser {
  contructor(accountUser) {
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
      const result = await accountStore.find({})
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

  static async deleteAccountByEmailId(email) {
    try {
      const result = await accountStore.deleteOne({ email })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

}
