# Endpoints

- /auth
- /token
- /register
- /signin
- /signout

- GET     /user
- POST    /user
- GET     /user/:userID
- PUT     /user/:userID
- PATCH   /user/:userID
- DELETE  /user/:userID


- GET     /user/:userID/client
- POST    /user/:userID/client
- GET     /user/:userID/client/:clientID
- PUT     /user/:userID/client/:clientID
- PATCH   /user/:userID/client/:clientID
- DELETE  /user/:userID/client/:clientID


# Collections

  ```TS
  interface User {
    userId,
    name,
    email,
    password
  }

  interface ClientApps{
    name,
    clientID,
    clientSecret,
    redirectUri,
    userId
  }

  interface Tokens{
    authorizationCode,
    codeChallange,
    challangeMethod,
    codeVerifier,
    accessToken,
    clientID,
    userId
  }

  interface Sessions{
    sessionId,
    
  }


  ```