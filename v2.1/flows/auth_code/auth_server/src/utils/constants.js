'use strict'

export const OAUTH_ERRORS = {
  'INVALID_CLIENT_ID': { error: 'Invalid clientId.' },
  'INVALID_RESPONSE_TYPE': { error: 'Invalid responseType.' },
  'INVALID_SCOPES': { error: 'Invalid scopes.' },
  'INVALID_REDIRECT_URI': { error: 'Invalid redirectUri.' },
  'UNDEFINED_QUERY_PARAMETERS': { error: 'Required query parameters cannot be undefined.' }
}

export const ERRORS = {
  'INTERNAL_SERVER_ERROR': { error: 'Internal server error.' },
  'USERNAME_NOT_FOUND': { error: 'Username is not found.' },
  'INVALID_PASSWORD': { error: 'Invalid password.' },
  'UNDEFINED_USERNAME': { error: 'Username cannot be undefined.' },
  'UNDEFINED_PASSWORD': { error: 'Password cannot be undefined.' },
  'UNDEFINED_CLIENT_ID': { error: 'ClientId cannot be undefined.' },
  'UNDEFINED_SID': { error: 'sid cannot be undefined.' }
}
