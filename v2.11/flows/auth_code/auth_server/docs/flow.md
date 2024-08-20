- load `/register`
- form with input fields for name, emailId, DOB, gender
- input box for password and retype password
- match the passwords
- if valid
- if user does not exist, hash the password and then add user
- `POST /register` --> `UserDAO.addUser`

- `PUT /user/:accountId` --> `UserDAO.updateUserById`
- `GET /user/:accountId` --> `UserDAO.getUserById`
- `DELETE /user/:accountId` --> `UserDAO.deleteUserById`
- `GET /user` --> `UserDAO.listUsers`

- `GET /user/:accountId/application` --> `UserDAO.listApplicationsByAccountId`
- `POST /user/:accountId/application` --> `ApplicationDAO.createApplication`
- `PUT /user/:accountId/application/:applicationId` --> `ApplicationDAO.updateApplicationById`
- `GET /user/:accountId/application/:applicationId` --> `ApplicationDAO.getApplicationById`
- `DELETE /user/:accountId/application/:applicationId` --> `ApplicationDAO.deleteApplicationById`

- success or failure message in the frontend
