'use strict'

//import { AccountStore } from '../../dao/v1/accountStore.js'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'

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

  static async register(req, res, next) {
    const userFromBody = req.body
    try {
      const result = await AccountStore.createAccount(userInfo)
      res.status(201).json({ status: 'Account has been successfully created.' })
    } catch (e) {
      throw new Error(e)
    }
  }

  static async signin(req, res, next) {
    const { username, password } = req.body;
    const isValidUser = username == "jana" && password == "ranga"
    if (isValidUser) {
      res.status(200).json({ status: "valid user" })
    } else {
      res.status(400).json({ status: "Invalid user" })
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
}

