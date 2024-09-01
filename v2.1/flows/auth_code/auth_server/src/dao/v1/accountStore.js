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
    if (!accountStore) {
      accountStore = db.collection("accountStore")
    }
  }

  static async createAccount(user) {
    try {
      const result = await accountStore.insertOne(user)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async findAccountByEmailId(email) {

    const pipeline = [
      { $match: { email } },
      { $count: { $sum: 1 } }
    ]

    try {
      const result = await accountStore.aggregate(pipeline)
      return result.toArray().length == 1
    } catch (e) {
      throw new Error(e)
    }
  }

}
