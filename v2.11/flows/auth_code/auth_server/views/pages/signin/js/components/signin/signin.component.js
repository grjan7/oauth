'use strict'

import { Component } from '../../core/component.js'
import signinButtonComponent from './signinButton.component.js'
import signinHeaderComponent from './signinHeader.component.js'
import signinPasswordComponent from './signinPassword.component.js'
import signinStatusComponent from './signinStatus.component.js'
import signinUsernameComponent from './signinUsername.component.js'
import signupLinkButtonComponent from './signupLinkButton.component.js'
import signupTextComponent from './signupText.component.js'

const signinComponent = new Component({
  template: ` 
    <div id="signin-component">
    <form id="signin-form">
      ${signinHeaderComponent.template}
      ${signinStatusComponent.template}
      ${signinUsernameComponent.template}
      ${signinPasswordComponent.template}
      ${signinButtonComponent.template}      
      ${signupTextComponent.template}      
      ${signupLinkButtonComponent.template}
    </form>         
    </div>`,

  style: `#signin-component{
    background-color: #fff;
    width: 380px;
    margin: auto;  
    margin-top: 1%;    
    padding: 20px;
    min-height: 500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }  
  `,

  eventHandlers: {}
})

export default signinComponent