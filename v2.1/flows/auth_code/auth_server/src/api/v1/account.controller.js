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
    const { host, origin } = req.headers
    if (host && origin) {
      const originHost = origin.split("://")[1]
      if (host != originHost) {
        res.status(401).json({ status: `Request expected to be originated from same-site.` })
        return
      } else {
        next()
      }
    } else {
      res.status(400).json({ status: `Use the browser for this request.` })
      return
    }
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

  static async validateUserInfo(req, res, next) {
    const userInfo = req.body
    const { firstname, lastname, email, password } = userInfo
    const isValidFirstName = AccountCtrl.validateFirstname(firstname)
    const isValidLastName = AccountCtrl.validateLastname(lastname)
    const isValidEmail = AccountCtrl.validateEmail(email)
    const isValidPassword = AccountCtrl.validatePassword(password)
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
    try {
      const { firstname, lastname, email, password } = req.body
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
    try {
      const { username, password } = req.body
      const hashedPassword = hash(password)
      const userInfo = await AccountStore.findAccountByEmailId(username)
      if (userInfo) {
        const accountId = userInfo._id
        const sessionOwner = { email: username, accountId }
        const isValidPassword = (hashedPassword == userInfo.hashedPassword)
        if (isValidPassword) {
          const sessionId = await sessionCtrl.createSession(req, sessionOwner)
          //res.clearCookie('sessionId')          
          res.cookie("sessionId", sessionId).status(200).json({ status: 'success' })
        } else {
          res.status(400).json({ status: `Incorrect password` })
        }
      } else {
        res.status(400).json({ status: `Username is not found` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  // validate session
  // getSessionInfo from body
  // update account with last 10 sessions
  // delete session from sessionstore

  static async signout(req, res, next) {
    try {
      const sessionInfo = req.body.session
      const updateResult = await AccountStore.updateLastSessionByEmailId(sessionInfo)
      if (updateResult.modifiedCount == 1) {
        await sessionCtrl.deleteSessionBySessionId(req)
        res.clearCookie('sessionId')
        res.status(200).json({ status: "Successfully signed out." })
      } else {
        res.status(400).json({ status: "Invalid credentials." })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listAccounts(req, res, next) {
    try {
      const result = await AccountStore.listAccounts()
      res.status(200).json(result)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getAccountByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = await AccountStore.findAccountByEmailId(email)
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Invalid session.' })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateAccountByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = AccountStore.updateAccountByEmailId(email)
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Invalid session.' })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async changePasswordByEmailId(req, res, next) {
    try {
      const { oldPassword, newPassword } = req.body
      const { email } = req.body.session
      if (email && oldPassword && newPassword) {

        const validatedNewPassword = AccountCtrl.validatePassword(newPassword)
        if (validatedNewPassword) {
          const oldPasswordHash = hash(oldPassword)
          const newPasswordHash = hash(newPassword)
          const result = await AccountStore.changePassword(email, oldPasswordHash, newPasswordHash)
          if (result.modifiedCount == 1) {
            res.status(200).json({ status: `Password is successfully changed.` })
          } else {
            res.status(400).json({ error: `Invalid credentials.` })
          }
        } else {
          res.status(400).json({ error: `Invalid new password.` })
        }
      } else {
        res.status(400).json({ error: `email, oldPassword, newPassword cannot be undefined.` })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAccountByEmailId(req, res, next) {
    try {
      const { email } = req.body.session
      if (email) {
        const result = AccountStore.deleteAccountByEmailId(email)
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: 'Invalid session.' })
      }
    } catch (e) {
      throw new Error(e)
    }
  }

}


