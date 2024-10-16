'use strict'

import { Component } from 'lib/component.class.js'
import { SignupClient } from '../../services/signupClient.js'

const template = `
  <div id="signup-button-component" class="input-component">
    <input type="submit" value="Create an account" id="signup-button" tabindex="3">
  </div>`

const style = `
  #signup-button {
    width: 100%;
    padding: 4%;
    color: #fff;
    background-color: #0061a2;
    border: 0;
    border-radius: 50px;  
    margin-top: 1rem;    
    font-size: 18px;
  }

  #signup-button:hover {
    color: #f0f0f0;   
    background-color: #004182;
  }`

const eventHandlers = {

  signupHandler: () => {
    const signupButton = document.getElementById("signup-button")

    signupButton.onclick = async (e) => {
      e.preventDefault()
      try {
        const userInfo = SignupClient.getUserInfo()
        const isValidUserInfo = SignupClient.validateUserInfo(userInfo)
        let signupStatusMessage = document.getElementById('signup-status-message')
        signupStatusMessage.style.display = 'none'

        if (!isValidUserInfo) {
          const response = await SignupClient.addUser(userInfo)
          const result = await response.json()
          if (response.status == 200) {
            signupStatusMessage.style.display = 'none'
            window.location.replace('/')
          } else {
            signupStatusMessage.innerHTML = result.status
            signupStatusMessage.style.display = 'block'
          }
        } else {
          signupStatusMessage.innerHTML = isValidUserInfo.error
          signupStatusMessage.style.display = 'block'
        }

      } catch (e) {
        console.error(e)
      }
    }
  }

}

const signupButtonComponent = new Component({ template, style, eventHandlers })

export default signupButtonComponent