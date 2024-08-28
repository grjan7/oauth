'use strict'

import { Component } from '../../../../../lib/component.class.js'

const template = `
<div id="signup-password-component">
  <label for="signup-password" id="signup-password-label">Password</label>
  <input type="password" name="signup-password" placeholder="Password" 
  id="signup-password" tabindex="2" required>       
</div>`

const style = `
#signup-password {
  width: 90%;
  padding: 4%;  
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.6);  
}

#signup-password-component{  
  align-items: center; 
  padding: 4%;  
}

#signup-password-label{
  display: none;
  color: #004182;
  font-weight: 600;
  padding: 0px 0px 5px 0px;
}`

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

const signupPasswordComponent = new Component({ template, style, eventHandlers })

export default signupPasswordComponent