'use strict'


export default class SignupCtrl {
  static async addUser(req, res, next) {
    const { firstname, lastname, email, password } = req.body;
    res.status(200).json({ status: "Successfully added user." })
  }
}

