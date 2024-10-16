'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-lastname-component" class="input-component">
    <label for="signup-lastname" id="signup-lastname-label">Lastname*</label>      
    <input id="signup-lastname" name="signup-lastname" required="" value="" 
    autofocus type="text" placeholder="" tabindex="1">
  </div>`

const style = ``

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
