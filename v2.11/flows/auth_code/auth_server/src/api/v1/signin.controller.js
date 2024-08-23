'use strict'


export default class SigninCtrl {

  static async validateUser(req, res, next) {
    const { userName, password } = req.body;
    console.log(req.body)
    if (userName == "jana" && password == "ranga") {
      res.status(200).json({ status: "Valid user" })
    } else {
      res.status(400).json({ status: "Invalid user" })
    }
  }

}

