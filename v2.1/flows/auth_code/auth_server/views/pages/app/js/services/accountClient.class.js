'use strict'

import { Client } from './client.class.js'

export class AccountClient extends Client {

  static async getAccountInfo() {
    try {
      const path = '/account/getAccountInfo'
      const url = AccountClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }


  static async getLastSessions() {
    try {
      const path = '/account/getLastSessions'
      const url = AccountClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async signout() {
    try {
      const path = '/signout'
      const url = AccountClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options)
      return response
    } catch (e) {
      console.error(e)
    }
  }

}
