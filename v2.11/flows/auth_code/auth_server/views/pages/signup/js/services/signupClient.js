'use strict'

export class SignupClient {
  static host = 'http://localhost:5000'

  static connect(url) {
    SignupClient.host = url
  }
  /**
   * 
   * @param {UserInfo} userInfo
   * @property {string} name
   * @property {Date} dob
   * @property {string} gender
   * @property {string} email
   * @property {string} username
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
    const name = document.getElementById("signup-name").value
    const dob = document.getElementById("signup-dob").value
    const email = document.getElementById("signup-email").value
    const gender = document.getElementById("signup-gender").value
    const username = document.getElementById("signup-username").value
    const password = document.getElementById("signup-password").value
    return { name, dob, email, gender, username, password }
  }

}

/**
 * Parameter passed to `SignupClient.addUser` method
 * @typedef UserInfo
 * @property {string} name
 * @property {Date} dob
 * @property {string} gender
 * @property {string} email
 * @property {string} username
 * @property {string} password
 */
