'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-firstname-component" class="input-component">
    <label for="signup-firstname" id="signup-firstname-label">Firstname*</label>      
    <input id="signup-firstname" name="signup-firstname" required="" value="" 
    autofocus type="text" placeholder="" tabindex="1">
  </div>`

const style = ``

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

const signupFirstnameComponent = new Component({ template, style })

export default signupFirstnameComponent
