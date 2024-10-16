'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-email-component" class="input-component">
    <label for="signup-email" id="signup-email-label">Email*</label>      
    <input id="signup-email" name="signup-email" required="" value="" 
    autofocus type="text" placeholder="" tabindex="1">
  </div>`

const style = ``

const eventHandlers = {

  signupEmailOnChange: () => {
    const signupEmailBox = document.getElementById("signup-email")
    signupEmailBox.onkeydown = () => {
      const isSignupEmailEmpty = signupEmailBox.value.length <= 0
      if (!isSignupEmailEmpty) {
        document.getElementById('signup-email-label').style.display = 'block'
      } else {
        document.getElementById('signup-email-label').style.display = 'none'
      }
    }
  }

}

const signupEmailComponent = new Component({ template, style })

export default signupEmailComponent
