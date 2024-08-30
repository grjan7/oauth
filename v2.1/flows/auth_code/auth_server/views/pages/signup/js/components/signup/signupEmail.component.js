'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-email-component">
    <label for="signup-email" id="signup-email-label">Email</label>      
    <input id="signup-email" name="signup-email" required="" value="" 
    autofocus type="text" placeholder="Email" tabindex="1">
  </div>`

const style = `
  #signup-email {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-email-component {
    align-items: center; 
    padding: 4%;
  }

  #signup-email-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`

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

const signupEmailComponent = new Component({ template, style, eventHandlers })

export default signupEmailComponent
