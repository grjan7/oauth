'use strict'

import { Component } from '../../../../../lib/component.class.js'

const template = `
  <div id="signup-username-component">
    <label for="signup-username" id="signup-username-label">Username</label>      
    <input id="signup-username" name="signup-username" required="" value="" 
    autofocus type="text" placeholder="Username" tabindex="1">
  </div>`

const style = `
  #signup-username {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-username-component {
    align-items: center; 
    padding: 4%;
  }

  #signup-username-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`

const eventHandlers = {

  signupUsernameOnChange: () => {
    const signupUsernameBox = document.getElementById("signup-username")
    signupUsernameBox.onkeydown = () => {
      const isSignupUsernameEmpty = signupUsernameBox.value.length <= 0
      if (!isSignupUsernameEmpty) {
        document.getElementById('signup-username-label').style.display = 'block'
      } else {
        document.getElementById('signup-username-label').style.display = 'none'
      }
    }
  }

}

const signupUsernameComponent = new Component({ template, style, eventHandlers })

export default signupUsernameComponent
