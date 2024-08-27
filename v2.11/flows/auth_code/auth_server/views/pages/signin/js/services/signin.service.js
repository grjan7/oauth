'use strict'

export const authenticateUser = async (data) => {
  const url = '/signin/flow/default'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(url, options)
    return response
  } catch (e) {
    console.error(e)
  }
}