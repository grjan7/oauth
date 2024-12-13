'use strict'

import { Client } from './client.class.js'

// the methods in this class could have bugs to be fixed. 

export class ClientAppClient extends Client {

  static async registerClientApp() {
    try {
      const path = '/client/registerClientApp'
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

  static async listMyClientApps() {
    try {
      const path = '/client/listMyClientApps'
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

  static async getMyClientApp(clientId) {
    try {
      const path = '/client/getMyClientApp'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId })
      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async updateClientAppUrl(clientId, clientAppUrl) {
    try {
      const path = '/client/updateClientAppUrl'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, clientAppUrl })

      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async updateClientAppLogoUrl(clientId, logoUrl) {
    try {
      const path = '/client/updateClientAppLogoUrl'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, clientAppLogoUrl })

      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async updateClientAppName(clientId, clientAppName) {
    try {
      const path = '/client/updateClientAppName'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, clientAppName })

      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async updateRedirectUri(clientId, redirectUri) {
    try {
      const path = '/client/updateRedirectUri'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, redirectUri })

      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async updateScopes(clientId, scopes) {
    try {
      const path = '/client/updateClientAppScopes'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, scopes })

      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async regenerateClientSecret(clientId) {
    try {
      const path = '/client/regenerateClientSecret'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId })
      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async deleteMyClientApp(clientId) {
    try {
      const path = '/client/deleteMyClientApp'
      const url = ClientAppClient.host + path
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId })
      }
      const response = await fetch(url, options)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  }

  static async deleteMyClientApps() {
    try {
      const path = '/client/deleteMyClientApps'
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