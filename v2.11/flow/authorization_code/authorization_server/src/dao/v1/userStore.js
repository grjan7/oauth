'use strict'

let userStore

export class User {
  contructor(user) {
    this.id = user.id
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.dob = user.dob
    this.hashedPassword = user.hashedPassword
    this.profileUrl = user.profileUrl
    this.email = user.email
    this.phone = user.phone
    this.preferences = user.preferences
  }
}

export class UserStore {
  static async init(db) {
    if (!userStore) {
      userStore = db.collection("userStore")
    }
  }
}
