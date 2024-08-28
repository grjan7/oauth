'use strict'

import { Component } from '../../core/component.class.js'

const template = `
  <div id="signin-username-component">
    <label for="signin-username" id="signin-username-label">Username or Email</label>      
    <input id="signin-username" name="signin-username" required="" value="" 
    autofocus type="text" placeholder="Username or Email" tabindex="1">
  </div>`

const style = `
  #signin-username {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signin-username-component {
    align-items: center; 
    padding: 4%;
  }

  #signin-username-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`

const eventHandlers = {

  usernameOnChange: () => {
    const usernameBox = document.getElementById("signin-username")
    usernameBox.onkeydown = () => {
      const isUsernameEmpty = usernameBox.value.length <= 0
      if (!isUsernameEmpty) {
        document.getElementById('signin-username-label').style.display = 'block'
      } else {
        document.getElementById('signin-username-label').style.display = 'none'
      }
    }
  }

}

const signinUsernameComponent = new Component({ template, style, eventHandlers })

export default signinUsernameComponent
