'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="signup-password-component" class="input-component">
  <label for="signup-password" id="signup-password-label">Password*</label>
  <input type="password" name="signup-password" placeholder="" 
  id="signup-password" tabindex="2" required>       
</div>`

const style = ``

const eventHandlers = {

  signupPasswordOnChange: () => {
    const passwordBox = document.getElementById("signup-password")
    passwordBox.onkeydown = () => {
      const isPasswordEmpty = passwordBox.value.length <= 0
      if (!isPasswordEmpty) {
        document.getElementById('signup-password-label').style.display = 'block'
      } else {
        document.getElementById('signup-password-label').style.display = 'none'
      }
    }
  }

}

const signupPasswordComponent = new Component({ template, style })

export default signupPasswordComponent