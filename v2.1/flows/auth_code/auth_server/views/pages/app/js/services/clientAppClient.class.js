'use strict'

import { Client } from './client.class.js'

export class ClientAppClient extends Client {

  static async listApps() {
    const appsList = [
      {
        name: "Jsonalytix",
        description: "Analytics App"
      },
      {
        name: "Nango",
        description: "Unified API integration for all services."
      }
    ]
    return appsList
  }
}