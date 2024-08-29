'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="signup-confirm-password-component">
  <label for="signup-confirm-password" id="signup-confirm-password-label">Confirm Password</label>
  <input type="password" name="signup-confirm-password" placeholder="Confirm Password" 
  id="signup-confirm-password" tabindex="2" required>       
</div>`

const style = `
#signup-confirm-password {
  width: 90%;
  padding: 4%;  
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.6);  
}

#signup-confirm-password-component{  
  align-items: center; 
  padding: 4%;  
}

#signup-confirm-password-label{
  display: none;
  color: #004182;
  font-weight: 600;
  padding: 0px 0px 5px 0px;
}`

const eventHandlers = {

  signupConfirmPasswordOnChange: () => {
    const signupConfirmPasswordBox = document.getElementById("signup-confirm-password")
    signupConfirmPasswordBox.onkeydown = () => {
      const isSignupConfirmPasswordEmpty = signupConfirmPasswordBox.value.length <= 0
      if (!isSignupConfirmPasswordEmpty) {
        document.getElementById('signup-confirm-password-label').style.display = 'block'
      } else {
        document.getElementById('signup-confirm-password-label').style.display = 'none'
      }
    }
  }

}

const signupConfirmPasswordComponent = new Component({ template, style, eventHandlers })

export default signupConfirmPasswordComponent