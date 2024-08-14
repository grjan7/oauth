'use strict'

let userStore

export class User {

}

export class UserStore {
  static async init(db) {
    if (!userStore) {
      userStore = db.collection("userStore")
    }
  }
}
