'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-gender-component">
    <label for="signup-gender" id="signup-gender-label">Email</label>    
    <input id="signup-gender" name="signup-gender" required="" value="" 
    autofocus type="text" placeholder="gender" tabindex="1">
  </div>`

const style = `
  #signup-gender {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-gender-component {
    align-items: center; 
    padding: 4%;
  }

  #signup-gender-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`


const signupGenderComponent = new Component({ template, style })

export default signupGenderComponent
