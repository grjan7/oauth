'use strict'

import { Component } from 'lib/component.class.js'
import signinLinkButtonComponent from './signinLinkButton.component.js'
import signinTextComponent from './signinText.component.js'
import signupButtonComponent from './signupButton.component.js'
import signupConfirmPasswordComponent from './signupConfirmPassword.component.js'
import signupEmailComponent from './signupEmail.component.js'
import signupHeaderComponent from './signupHeader.component.js'
import signupFirstnameComponent from './signupFirstname.component.js'
import signupLastnameComponent from './signupLastname.component.js'
import signupPasswordComponent from './signupPassword.component.js'
import signupStatusComponent from './signupStatus.component.js'

const template = ` 
  <div id="signup-component" class="show-on-init-slow">
    ${signupHeaderComponent.template}
    <form id="signup-form">
      ${signupStatusComponent.template}
      ${signupFirstnameComponent.template}
      ${signupLastnameComponent.template}
      ${signupEmailComponent.template}
      ${signupPasswordComponent.template}
      ${signupConfirmPasswordComponent.template}
      ${signupButtonComponent.template}      
      ${signinTextComponent.template}      
      ${signinLinkButtonComponent.template}
    </form>         
  </div>`

const style = `
  #signup-component {
    background-color: #151515;
    width: 25vw;
    margin: auto;  
    margin-top: 1%;    
    padding: 1% 2%;
    min-height: 500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }  
  `

const signupComponent = new Component({ template, style })

export default signupComponent