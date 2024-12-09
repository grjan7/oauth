'use strict'

import { Client } from './client.class.js'

// the methods in this class could have bugs to be fixed. 

export class ClientAppClient extends Client {

  static async registerClientApp() {
    try {
      const path = '/client/registerClientAppByEmailId'
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

  static async getClientApp(clientId) {
    try {
      const path = '/client/getClientAppByEmailIdAndClientId'
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

  static async updateClientAppName(clientId, clientAppName) {
    try {
      const path = '/client/updateClientAppNameByEmailIdAndClientId'
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
      const path = '/client/updateRedirectUriByEmailIdAndClientId'
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
      const path = '/client/updateScopesByEmailIdAndClientId'
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
      const path = '/client/regenerateClientSecretByEmailIdAndClientId'
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

  static async deleteClientApp(clientId) {
    try {
      const path = '/client/deleteClientAppByEmailIdAndClientId'
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

}