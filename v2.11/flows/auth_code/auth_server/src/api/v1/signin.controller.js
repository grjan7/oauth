'use strict'


export default class SigninCtrl {
  static async validateUser(req, res, next) {
    const { userName, password } = req.body;
    const isValidUser = userName == "jana" && password == "ranga"
    if (isValidUser) {
      res.status(200).json({ status: "valid user" })
    } else {
      res.status(400).json({ status: "Invalid user" })
    }
  }
}

