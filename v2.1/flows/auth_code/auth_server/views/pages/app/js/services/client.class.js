'use strict'

export class Client {
  static host = 'http://localhost:5000'

  static connect(url) {
    AccountClient.host = url
  }
}