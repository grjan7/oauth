'use strict'

export const postSignout = async (data) => {
  const url = '/signout'
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