'use strict'

import { AccountStore } from '../../dao/v1/accountStore.js'
import { SessionStore } from '../../dao/v1/sessionStore.js'
import sessionCtrl from './session.controller.js'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'

const hash = (data) => createHash('sha256').update(data).digest('base64')

export default class AccountCtrl {

  static async isSameOrigin(req, res, next) {

  }

  static validateFirstname(firstname) {
    let isValid = false
    if (firstname && typeof firstname == 'string' && firstname.length >= 2) {
      const firstnamePattern = /[A-Z]{1}[a-z]+/
      isValid = firstname.match(firstnamePattern).length > 0
    }
    return isValid
  }

  static validateLastname(lastname) {
    let isValid = false
    if (lastname && typeof lastname == 'string' && lastname.length >= 1) {
      const lastnamePattern = /[A-Z]{1}[a-z]+/
      isValid = lastname.match(lastnamePattern).length > 0
    }
    return isValid
  }

  static validateEmail(email) {
    let isValid = false
    if (email && typeof email == 'string') {
      const emailPattern = /[A-Z]{1}[a-z]+/
      isValid = email.match(emailPattern).length > 0
    }
    return isValid
  }

  static validatePassword(password) {
    let isValid = false
    if (password && typeof password == 'string' && password.length >= 8) {
      const passwordPattern = /[A-Z]{1}[a-z]+/
      isValid = password.match(passwordPattern).length > 0
    }
    return isValid
  }

  static async validateUserInfo(req, res, next) {
    const userInfo = req.body
    const { firstname, lastname, email, password } = userInfo

    const isValidFirstName = this.validateFirstname(firstname)
    const isValidLastName = this.validateLastname(lastname)
    const isValidEmail = this.validateEmail(email)
    const isValidPassword = this.validatePassword(password)

    if (!isValidFirstName) {
      res.status(400).json({ status: `Invalid firstname.` })
      return
    }

    if (!isValidLastName) {
      res.status(400).json({ status: `Invalid lastname.` })
      return
    }

    if (!isValidEmail) {
      res.status(400).json({ status: `Invalid email.` })
      return
    }

    if (!isValidPassword) {
      res.status(400).json({ status: `Invalid password.` })
      return
    }

    next()
  }

  static async register(req, res, next) {
    // validate user info
    // find if the user already exist
    // add user if the user does not exist
    // email--user 1-to-1 relationship

    const { firstname, lastname, email, password } = req.body
    try {
      const findAccountResult = await AccountStore.findAccountByEmailId(email)
      const hashedPassword = hash(password)
      const userInfo = {
        firstname, lastname, email, hashedPassword
      }
      if (!findAccountResult) {
        await AccountStore.createAccount(userInfo)
        res.status(200).json({ status: 'Account has been successfully created.' })
      } else {
        res.status(400).json({ status: 'Account already exists.' })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async signin(req, res, next) {
    let errorMessage = {}
    const { username, password } = req.body
    const hashedPassword = hash(password)
    try {
      const userInfo = await AccountStore.findAccountByEmailId(username)
      if (userInfo) {
        const accountId = userInfo._id.toString()
        const sessionOwner = { email: username, accountId }
        const isValidPassword = (hashedPassword == userInfo.hashedPassword)
        if (isValidPassword) {
          const sessionId = await sessionCtrl.createSession(req, sessionOwner)
          //res.clearCookie('sessionId')
          res.cookie("sessionId", sessionId)
          res.status(200).json({ status: 'success' })
        } else {
          errorMessage.status = `Incorrect password`
          res.status(400).json(errorMessage)
        }
      } else {
        errorMessage.status = `Username is not found`
        res.status(400).json(errorMessage)
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async signout(req, res, next) {
    try {
      await sessionCtrl.deleteSessionBySessionId(req)
      res.status(200).json({ status: "Successfully signed out." })
    } catch (e) {
      throw new Error(e)
    }

  }

  static async signup(req, res, next) {
    const { firstname, lastname, email, password } = req.body;
    res.status(200).json({ status: "Successfully added user." })
  }

  static async listAccounts(req, res, next) {
    const { sessionId } = req.cookies
    try {
      const result = await AccountStore.listAccounts()
      res.status(200).json(result)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getAccountById(req, res, next) {
    const { sessionId } = req.cookies

    try {
      const session = await SessionStore.getSessionBySessionId(sessionId)
      const { email } = session
      const result = AccountStore.findAccountByEmailId(email)
      res.status(200).json(result)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateAccountById(req, res, next) {
    const { sessionId } = req.cookies
    try {
      const session = await SessionStore.getSessionBySessionId(sessionId)
      const { email } = session
      const result = AccountStore.updateAccountByEmailId(email)
      res.status(200).json(result)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAccountById(req, res, next) {
    const { sessionId } = req.cookies
    try {
      const session = await SessionStore.getSessionBySessionId(sessionId)
      const { email } = session
      const result = AccountStore.deleteAccountByEmailId(email)
      res.status(200).json(result)
    } catch (e) {
      throw new Error(e)
    }
  }

}


