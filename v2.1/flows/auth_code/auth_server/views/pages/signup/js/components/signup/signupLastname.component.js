'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-lastname-component">
    <label for="signup-lastname" id="signup-lastname-label">Lastname*</label>      
    <input id="signup-lastname" name="signup-lastname" required="" value="" 
    autofocus type="text" placeholder="" tabindex="1">
  </div>`

const style = `
  #signup-lastname {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-lastname-component {
    align-items: center; 
    padding: 3%;
  }

  #signup-lastname-label {
    display: block;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`

const eventHandlers = {

  signupLastnameOnChange: () => {
    const lastnameBox = document.getElementById("signup-lastname")
    lastnameBox.onkeydown = () => {
      const isLastnameEmpty = lastnameBox.value.length <= 0
      if (!isLastnameEmpty) {
        document.getElementById('signup-lastname-label').style.display = 'block'
      } else {
        document.getElementById('signup-lastname-label').style.display = 'none'
      }
    }
  }

}

const signupLastnameComponent = new Component({ template, style })

export default signupLastnameComponent
