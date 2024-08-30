'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="signin-password-component">
  <label for="signin-password" id="signin-password-label">Password</label>
  <input type="password" name="signin-password" placeholder="Password" 
  id="signin-password" tabindex="2" required>       
</div>`

const style = `
#signin-password {
  width: 90%;
  padding: 4%;  
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.6);  
}

#signin-password-component{  
  align-items: center; 
  padding: 4%;  
}

#signin-password-label{
  display: none;
  color: #004182;
  font-weight: 600;
  padding: 0px 0px 5px 0px;
}`

const eventHandlers = {

  passwordOnChange: () => {
    const passwordBox = document.getElementById("signin-password")
    passwordBox.onkeydown = () => {
      const isPasswordEmpty = passwordBox.value.length <= 0
      if (!isPasswordEmpty) {
        document.getElementById('signin-password-label').style.display = 'block'
      } else {
        document.getElementById('signin-password-label').style.display = 'none'
      }
    }
  }

}

const signinPasswordComponent = new Component({ template, style, eventHandlers })

export default signinPasswordComponent