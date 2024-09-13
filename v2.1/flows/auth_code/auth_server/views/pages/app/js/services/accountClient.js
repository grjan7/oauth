'use strict'

export class AccountClient {
  static host = 'http://localhost:5000'

  static connect(url) {
    AccountClient.host = url
  }

  static async getAccountById() {
    const path = '/account/getAccountById'
    const url = AccountClient.host + path
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch(url, options)
      return response
    } catch (e) {
      console.error(e)
    }
  }

  static async signout() {
    const path = '/signout'
    const url = AccountClient.host + path
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch(url, options)
      return response
    } catch (e) {
      console.error(e)
    }
  }

}

