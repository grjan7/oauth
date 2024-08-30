'use strict'

export class SignupClient {
  static host = 'http://localhost:5000'

  static connect(url) {
    SignupClient.host = url
  }
  /**
   * 
   * @param {UserInfo} userInfo
   * @property {string} firstname
   * @property {string} lastname 
   * @property {string} email 
   * @property {string} password
   * @returns {Response} AddUserResponse
   * 
   */
  static async addUser(userInfo) {
    const path = '/signup'
    const url = SignupClient.host + path
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
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
  static getUserInfo() {
    const firstname = document.getElementById("signup-firstname").value
    const lastname = document.getElementById("signup-lastname").value
    const email = document.getElementById("signup-email").value
    const password = document.getElementById("signup-password").value
    return { firstname, lastname, email, password }
  }

}

/**
 * Parameter passed to `SignupClient.addUser` method
 * @typedef UserInfo
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {string} password
 */
