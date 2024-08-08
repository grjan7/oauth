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

  # List of steps involved in Authorization Code Flow

  - User registration
  
    - GET /
    - POST /register
      - data 
      {
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       phoneNo: ""
      }

      > extract data from request
      > validate if user already exists in the Users collection
      > if not, hash the value of password and add User to Users collection
      > respond with success,

  - User sign in

      - POST /signin
        - data
        {
          username: ""
          password: ""
        }
        
        > extract the user credentials from request
        > validate if the username and password matches
        > if matches create a session for the user
        > make sure if the session is alive for rest of the API calls

  - Client application registration

    > create a new application with 
    - POST /application 
    - data 
    {
      name,
      redirectUri,
      scopes
    }
    > generate client credentials
  - Flow