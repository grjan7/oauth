'use strict'

export default class ClientSDK {
  static host = 'http://localhost:5000'
  /**
   * 
   * @param {object} user user credentials username and password
   * @returns authentication response
   * 
   */
  static async authenticateUser(user) {
    const path = '/signin/flow/default'
    const url = ClientSDK.host + path
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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
   * @returns {object} user
   * 
   */
  static getUserCredentials() {
    const userName = document.getElementById("signin-username").value
    const password = document.getElementById("signin-password").value
    return { userName, password }
  }
}