'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-dob-component">
    <label for="signup-dob" id="signup-dob-label">Email</label>    
    <input id="signup-dob" name="signup-dob" required="" value="" 
    autofocus type="date" placeholder="DOB" tabindex="1">
  </div>`

const style = `
  #signup-dob {
    width: 90%;
    padding: 4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }

  #signup-dob-component {
    align-items: center; 
    padding: 4%;
  }

  #signup-dob-label {
    display: none;
    color: #004182;
    font-weight: 600;
    padding: 0px 0px 5px 0px;
  }
`


const signupDOBComponent = new Component({ template, style })

export default signupDOBComponent
