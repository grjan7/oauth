'use strict'

import { postSignin } from "../../services/apiCalls.js"

const signinButtonComponent = {
  template: `
    <div id="signin-button-component">
      <input type="submit" value="Sign in" id="signin-button">
    </div>`,

  style: `
  #signin-button {
    width: 100%;
    padding: 4%;
    color: #fff;
    background-color: #0061a2;
    border: 0;
    border-radius: 50px;
    font-size: 18px;    
  }
    
  #signin-button-component{
    padding: 4%;
    align-items: center;
  }

  #signin-button:hover{
   color: #f0f0f0;   
   background-color: #004182;
  }`,

  eventHandlers: {
    signinHandler: () => {
      const signinButton = document.getElementById("signin-button")
      signinButton.onclick = async (e) => {
        e.preventDefault()
        const userName = document.getElementById("signin-username").value
        const password = document.getElementById("signin-password").value
        try {
          const response = await postSignin({ userName, password })
          const result = await response.json()
          let signinStatusMessage = document.getElementById('signin-status-message')
          signinStatusMessage.innerHTML = result.status
          signinStatusMessage.style.display = 'block'
          if (response.status == 200) {
            window.location.href = '/app'
          }
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
}

export default signinButtonComponent