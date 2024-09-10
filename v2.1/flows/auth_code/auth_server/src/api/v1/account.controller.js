'use strict'

import { AccountStore } from '../../dao/v1/accountStore.js'
import { SessionStore } from '../../dao/v1/sessionStore.js'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'

const hash = (data) => {
  return createHash('sha256').update(data).digest('base64')
}

export class User {
  constructor({ firstname, lastname, email, password, preferences = {} } = {}) {
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.password = password
    this.preferences = preferences
  }
  toJson() {
    return { firstname: this.firstname, lastname: this.lastname, email: this.email, preferences: this.preferences }
  }

  async comparePassword(plainText) {
    //return await bcrypt.compare(plainText, this.password)
  }
  encoded() {
    return jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
        ...this.toJson(),
      },
      process.env.SECRET_KEY,
    )
  }
  static async decoded(userJwt) {
    return jwt.verify(userJwt, process.env.SECRET_KEY, (error, res) => {
      if (error) {
        return { error }
      }
      return new User(res)
    })
  }
}

export default class AccountCtrl {
  static async validateUserInfo(userInfo) {
    // validate firstName
    // validate lastName
    // validate email
    // validate password
  }

  static async register(req, res, next) {
    // validate user info
    // find if the user already exist
    // add user if the user does not exist
    // email--user 1-to-1 relationship

    const userInfo = req.body

    try {
      const findResult = await AccountStore.findAccountByEmailId(userInfo.email)
      console.log(findResult)
      /*
      if (!findResult) {
        const result = await AccountStore.createAccount(userInfo)
        res.status(201).json({ status: 'Account has been successfully created.' })
      } else {
        res.status(400).json({ status: 'Account already exists' })
      */

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
      const isValidUsername = username == userInfo.email
      const isValidPassword = hashedPassword == userInfo.hashedPassword
      if (isValidUsername) {
        if (isValidPassword) {
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
    const { sessionID, accountID } = req.body;
    res.status(200).json({ status: "Successfully signed out." })
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
      const result = AccountStore.getAccountById(email)
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

