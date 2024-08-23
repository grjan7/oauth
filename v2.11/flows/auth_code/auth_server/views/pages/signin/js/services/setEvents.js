'use strict'

import { postSignin } from "./apiCalls.js"

const setEventsService = () => {

  const signinButton = document.getElementById("signin-button")

  signinButton.onclick = async () => {
    const userName = document.getElementById("username").value
    const password = document.getElementById("password").value
    const { status } = await postSignin({ userName, password })
    document.getElementById('status-text').innerHTML = status
  }

}


export default setEventsService
