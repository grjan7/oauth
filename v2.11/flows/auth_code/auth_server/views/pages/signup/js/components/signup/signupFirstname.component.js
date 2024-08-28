'use strict'

import { Component } from '../../../../../lib/component.class.js'

const template = `
  <div id="signup-firstname-component">
    <label for="signup-firstname" id="signup-firstname-label">Firstname</label>      
    <input id="signup-firstname" name="signup-firstname" required="" value="" 
    autofocus type="text" placeholder="Firstname" tabindex="1">
  </div>`

const style = `
  #signup-firstname {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-firstname-component {
    align-items: center; 
    padding: 4%;
  }

  #signup-firstname-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`

const eventHandlers = {

  signupFirstnameOnChange: () => {
    const firstnameBox = document.getElementById("signup-firstname")
    firstnameBox.onkeydown = () => {
      const isFirstnameEmpty = firstnameBox.value.length <= 0
      if (!isFirstnameEmpty) {
        document.getElementById('signup-firstname-label').style.display = 'block'
      } else {
        document.getElementById('signup-firstname-label').style.display = 'none'
      }
    }
  }

}

const signupFirstnameComponent = new Component({ template, style, eventHandlers })

export default signupFirstnameComponent
