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
    const confirmPassword = document.getElementById("signup-confirm-password").value
    return { firstname, lastname, email, password, confirmPassword }
  }

  static validateFirstname(firstname) {
    let isValid = false
    if (firstname && typeof firstname == 'string' && firstname.length >= 2) {
      const firstnamePattern = /^[A-Z]{1}[a-z]+$/
      isValid = firstnamePattern.test(firstname)
    }
    return isValid
  }

  static validateLastname(lastname) {
    let isValid = false
    if (lastname && typeof lastname == 'string' && lastname.length >= 1) {
      const lastnamePattern = /^[A-Z]{1}[a-z]*$/
      isValid = lastnamePattern.test(lastname)
    }
    return isValid
  }

  static validateEmail(email) {
    let isValid = false
    if (email && typeof email == 'string') {
      const emailPattern = /^([a-z0-9-_.]{1,})@([a-z0-9-]+)\.([a-z]{2,})$/
      isValid = emailPattern.test(email)
    }
    return isValid
  }

  static validatePassword(password) {
    let isValid = false
    if (password && typeof password == 'string' && password.length >= 8) {
      const hasAlphabets = /[a-z]+/.test(password)
      const hasUpperCase = /[A-Z]{1,}/.test(password)
      const hasDigits = /[0-9]{1,}/.test(password)
      const hasSymbols = /[~!@#$%^&*_+-.]{1,}/.test(password)
      isValid = hasAlphabets && hasUpperCase && hasDigits && hasSymbols
    }
    return isValid
  }

  static validateUserInfo(userInfo) {
    const { firstname, lastname, email, password, confirmPassword } = userInfo
    const isValidFirstName = SignupClient.validateFirstname(firstname)
    const isValidLastName = SignupClient.validateLastname(lastname)
    const isValidEmail = SignupClient.validateEmail(email)
    const isValidPassword = SignupClient.validatePassword(password)
    const isValidConfirmPassword = SignupClient.validatePassword(confirmPassword)
    const passwordMatches = (isValidPassword == isValidConfirmPassword)
    if (!isValidFirstName) {
      return { error: `Invalid firstname.` }
    }
    if (!isValidLastName) {
      return { error: `Invalid lastname.` }
    }
    if (!isValidEmail) {
      return { error: `Invalid email.` }
    }
    if (!isValidPassword) {
      return { error: `Invalid password. Use atleast 8 character-long string with uppercase, lowercase, symbols, and digits.` }
    }
    if (!passwordMatches) {
      return { error: `Confirm password does not match.` }
    }
    return
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
