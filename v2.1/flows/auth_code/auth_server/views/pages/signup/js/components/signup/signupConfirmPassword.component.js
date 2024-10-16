'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="signup-confirm-password-component" class="input-component">
  <label for="signup-confirm-password" id="signup-confirm-password-label">Confirm Password*</label>  
  <input type="password" name="signup-confirm-password" id="signup-confirm-password" tabindex="2" placeholder="" required>
  
</div>`

const style = ``

const eventHandlers = {

  signupConfirmPasswordOnChange: () => {
    const signupConfirmPasswordBox = document.getElementById("signup-confirm-password")
    /*
    signupConfirmPasswordBox.onkeydown = () => {
      const isSignupConfirmPasswordEmpty = signupConfirmPasswordBox.value.length <= 0
      if (!isSignupConfirmPasswordEmpty) {
        document.getElementById('signup-confirm-password-label').style.display = 'block'
      } else {
        document.getElementById('signup-confirm-password-label').style.display = 'none'
      }
    }
    */
    signupConfirmPasswordBox.onchange = () => {
      const signupPasswordBox = document.getElementById('signup-password')
      const signupPasswordBoxValue = signupPasswordBox.value
      const passwordValidator = document.getElementById("password-validator")
      if (signupConfirmPasswordBox.value != signupPasswordBoxValue) {

      } else {
        passwordValidator.style.display = "block"
      }
    }
  }

}

const signupConfirmPasswordComponent = new Component({ template, style, eventHandlers })

export default signupConfirmPasswordComponent