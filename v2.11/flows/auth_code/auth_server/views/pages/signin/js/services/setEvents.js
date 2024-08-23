'use strict'

import { postSignin } from "./apiCalls.js"

const setEventsService = () => {

  const signinButton = document.getElementById("signin-button")

  signinButton.onclick = async (e) => {
    e.preventDefault()

    const userName = document.getElementById("username").value
    const password = document.getElementById("password").value

    try {
      const response = await postSignin({ userName, password })
      const result = await response.json()
      document.getElementById('status-text').innerHTML = result.status
      if (response.status == 200) {
        window.location.href = "/app"
      }
    } catch (e) {
      console.error(e)
    }
  }
}


export default setEventsService
