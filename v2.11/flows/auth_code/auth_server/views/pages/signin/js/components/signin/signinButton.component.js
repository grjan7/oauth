'use strict'

import { Component } from '../../core/component.class.js'
import { ClientSDK } from "../../services/clientSDK.js"

const template = `
  <div id="signin-button-component">
    <input type="submit" value="Sign in" id="signin-button" tabindex="3">
  </div>`

const style = `
  #signin-button {
    width: 100%;
    padding: 4%;
    color: #fff;
    background-color: #0061a2;
    border: 0;
    border-radius: 50px;
    font-size: 18px;    
  }
    
  #signin-button-component {
    padding: 4%;
    align-items: center;
  }

  #signin-button:hover {
    color: #f0f0f0;   
    background-color: #004182;
  }`

const eventHandlers = {

  signinHandler: () => {
    const signinButton = document.getElementById("signin-button")

    signinButton.onclick = async (e) => {
      e.preventDefault()
      try {
        const user = ClientSDK.getUserCredentials()
        const response = await ClientSDK.authenticateUser(user)
        const result = await response.json()

        let signinStatusMessage = document.getElementById('signin-status-message')
        if (response.status == 200) {
          signinStatusMessage.style.display = 'none'
          window.location.replace('/app')
        } else {
          signinStatusMessage.innerHTML = result.status
          signinStatusMessage.style.display = 'block'
        }
      } catch (e) {
        console.error(e)
      }
    }
  }

}

const signinButtonComponent = new Component({ template, style, eventHandlers })

export default signinButtonComponent