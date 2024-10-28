'use strict'

import { Client } from './client.class.js'

export class ClientAppClient extends Client {

  static async listClientApps() {
    try {
      const path = '/client/listClientAppsByEmailId'
      const url = ClientAppClient.host + path
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
}