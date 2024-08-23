'use strict'


export default class SignoutCtrl {
  static async signoutSession(req, res, next) {
    const { sessionID, accountID } = req.body;
    res.status(200).json({ status: "Successfully signed out." })
  }
}

