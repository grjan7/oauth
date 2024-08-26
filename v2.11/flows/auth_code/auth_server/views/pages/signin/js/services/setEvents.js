'use strict'

import { postSignin } from "./apiCalls.js"

const passwordOnChange = () => {
  const passwordBox = document.getElementById("password")

  passwordBox.onkeydown = () => {
    const isPasswordEmpty = passwordBox.value.length <= 0
    if (!isPasswordEmpty) {
      document.getElementById('password-label').style.display = 'block'
    } else {
      document.getElementById('password-label').style.display = 'none'
    }
  }
}
const usernameOnChange = () => {
  const usernameBox = document.getElementById("username")

  usernameBox.onkeydown = () => {
    const isUsernameEmpty = usernameBox.value.length <= 0
    if (!isUsernameEmpty) {
      document.getElementById('username-label').style.display = 'block'
    } else {
      document.getElementById('username-label').style.display = 'none'
    }
  }
}
const signinHandler = () => {
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
        window.location.href = '/app'
      }
    } catch (e) {
      console.error(e)
    }
  }
}

const signupLinkHandler = () => {
  const signupLink = document.getElementById("signup-link-button")
  signupLink.onclick = () => {
    window.location.href = '/signup'
  }
}

const setEventsService = () => {
  signinHandler()
  signupLinkHandler()
  usernameOnChange()
  passwordOnChange()

}


export default setEventsService
