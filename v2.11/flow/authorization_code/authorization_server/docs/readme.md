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
  interface User{
    userID,
    firstName,
    lastName,
    email,
    password
  }

  interface ClientApp{
    name,
    clientID,
    clientSecret,
    redirectUri,
    userID
  }

  interface Token{    
    codeChallange,
    challangeMethod,
    authorizationCode,
    state,
    codeVerifier,
    accessToken,
    clientID,
    userID
  }

  interface Session{
    sessionId,
    
  }


  ```