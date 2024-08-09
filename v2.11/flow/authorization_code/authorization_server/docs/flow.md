- load `/register`
- form with input fields for name, emailId, DOB, gender
- input box for password and retype password
- match the passwords
- if valid
- if user does not exist, hash the password and then add user
- `POST /register` --> `UserDAO.addUser`

- `PUT /user/:accountId` --> `UserDAO.updateUserByAccountId`
- `GET /user/:accountId` --> `UserDAO.getUserByAccountId`
- `DELETE /user/:accountId` --> `UserDAO.deleteUserByAccountId`
- `GET /user` --> `UserDAO.listUsers`
- `GET /user/:accountId/application` --> `UserDAO.listApplicationsByAccountId`
- `GET /user/:accountId/application` --> `UserDAO.listApplicationsByAccountId`

- success or failure message in the frontend
