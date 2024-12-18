'use strict'

export const OAUTH_ERRORS = {
  'INVALID_CLIENT_ID': { error: 'Invalid clientId.' },
  'INVALID_CLIENT_SECRET': { error: 'Invalid clientSecret' },
  'INVALID_RESPONSE_TYPE': { error: 'Invalid responseType.' },
  'INVALID_SCOPES': { error: 'Invalid scopes.' },
  'INVALID_REDIRECT_URI': { error: 'Invalid redirectUri.' },
  'UNDEFINED_QUERY_PARAMETERS': { error: 'Required query parameters cannot be undefined.' },
  'INVALID_GRANT_STATUS': { error: 'Invalid grantStatus.' },
  'INVALID_SID': { error: 'Invalid sid.' },
  'INVALID_CHALLANGE_METHOD': { error: 'Invalid challangeMethod.' },
  'UNDEFINED_CLIENT_ID': { error: 'clientId cannot be undefined.' },
  'UNDEFINED_GRANT_STATUS': { error: 'grantStatus cannot be undefined.' },
  'UNDEFINED_SID': { error: 'sid cannot be undefined.' },
  'INVALID_AUTHORIZATION_METHOD': { error: 'Invalid authorization method' },
  'UNDEFINED_AUTHORIZATION_HEADER': { error: 'Authorization header cannot be undefined.' },
  'MISSING_CLIENT_CREDENTIALS': { error: 'Missing client credentials.' },
  'MISSING_CLIENT_ID': { error: 'Missing clientId.' },
  'MISSING_CLIENT_SECRET': { error: 'Missing clientSecret.' },
  'INVALID_CODE': { error: 'Invalid authorization code' }
}

export const ERRORS = {
  'INTERNAL_SERVER_ERROR': { error: 'Internal server error.' },
  'USERNAME_NOT_FOUND': { error: 'Username is not found.' },
  'INVALID_PASSWORD': { error: 'Invalid password.' },
  'UNDEFINED_USERNAME': { error: 'Username cannot be undefined.' },
  'UNDEFINED_PASSWORD': { error: 'Password cannot be undefined.' }
}

export const DB_ERRORS = {


}
