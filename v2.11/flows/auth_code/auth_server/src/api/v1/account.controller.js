'use strict'

//import { UserDAO } from '../../dao/v1/userDAO.js'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default class AccountCtrl {

  static async getSignUpName(req, res, next) {
    const signUpNameform = `
    <div id="register">
    <h1>Create an Account</h1>
    <form action="/account/lifecycle/steps/signup/name" method="POST">
      <input type="text" name="firstName" placeholder="firstname" required id="firstname">
      <input type="text" name="lastName" placeholder="lastname" required id="lastname">
      <input type="submit" name="nameContinue" value="Continue&gt;"> 
    </form>
    </div>
    `
    res.sendFile(join(__dirname, '../../../views/pages/signin/index.html'))
    res.sendFile(join(__dirname, '../../../views/pages/signin/main.js'))
    res.sendFile(join(__dirname, '../../../views/pages/signin/style.css'))
  }

  static async postSignUpName(req, res, next) {
    const { firstName, lastName } = req.body
    const birthdayGenderEndpoint = "/account/lifecycle/steps/signup/birthdaygender"
    res.redirect(birthdayGenderEndpoint)
  }

  static async getSignUpBirthdayGender(req, res, next) {
    const signUpNameform = `
    <div id="register">
    <h1>Create an Account</h1>
    <form action="/account/lifecycle/steps/signup/birthdaygender" method="POST">
      <input type="date" name="birthday" required id="birthday">
      <input type="text" name="gender" placeholder="gender" required id="gender">
      <input type="submit" name="birthdayGenderContinue" value="Continue&gt;"> 
    </form>
    </div>
    `
    res.send(signUpNameform)
  }
}

