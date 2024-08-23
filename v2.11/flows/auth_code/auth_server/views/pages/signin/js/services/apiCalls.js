'use strict'

export const postSignin = async (data) => {
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
    console.log(response)
    const result = await response.json()
    return result
  } catch (e) {
    console.error(e)
  }
}