'use strict'

export class AuthClient {
  static host = 'http://localhost:5000'

  static connect(url) {
    AuthClient.host = url
  }
  /**
   * 
   * @param {UserCredentials} userCredentials   
   * @property {string} username
   * @property {string} password
   * @returns {Response} AuthenticateUserResponse
   * 
   */
  static async authenticateUser(userCredentials) {
    const path = '/signin/flow/default'
    const url = AuthClient.host + path
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    try {
      const response = await fetch(url, options)
      return response
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * 
   * @returns {UserCredentials}
   *  
   */
  static getUserCredentials() {
    const username = document.getElementById("signin-username").value
    const password = document.getElementById("signin-password").value
    return { username, password }
  }
}

/**
 * Parameter passed to `AuthClient.authenticateUser` method
 * @typedef UserCredentials
 * @property {string} username
 * @property {string} password
 */
