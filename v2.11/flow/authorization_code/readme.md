# OAuth 2.11: Authorization Code Flow

## Steps
1. User registration (Create an account)
1. Sign in 
  1. Session Management
  1. Client Registration (Create an Application)
  1. Generate Client Credentials
1. Sign out
1. Start the Flow
  1. User tries to access the client app
  1. Client redirects the user to Auth Server
  1. Request Validation by Auth Server
  1. Authentication of user based on pre-registered user info
  1. Authorization Prompt for User
    1. On success, redirect the user to client redirect url with authorization_code
    1. On failure, redirect the user to client redirect url with error code
  1. AS extracts code and exchanges it for token
  1. makes API call with bearer token authorization
  1. RS validates the token and fulfills the request if valid
  1. Client App business logic handles the user redirection and data update. 