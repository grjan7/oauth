'use strict'

import { AccountStore } from '../../dao/v1/accountStore.js'
import { SessionStore } from '../../dao/v1/sessionStore.js'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'

const hash = (data) => createHash('sha256').update(data).digest('base64')

export default class AccountCtrl {

  static async register(req, res, next) {
    // validate user info
    // find if the user already exist
    // add user if the user does not exist
    // email--user 1-to-1 relationship

    const { firstname, lastname, email, password } = req.body
    try {
      const findResult = await AccountStore.findAccountByEmailId(email)
      const hashedPassword = hash(password)
      const userInfo = {
        firstname, lastname, email, hashedPassword
      }
      if (findResult == null) {
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
        const isValidPassword = (hashedPassword == userInfo.hashedPassword)
        if (isValidPassword) {
          const session = { email: username } // add session info like browser details, ip address
          const sessionResult = await SessionStore.createSession(session)
          const sessionId = sessionResult.insertedId.toString()
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
    console.log(sessionId)
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


