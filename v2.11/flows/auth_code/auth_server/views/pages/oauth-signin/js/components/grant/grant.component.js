'use strict'

import { Component } from 'lib/component.class.js'

import grantHeaderComponent from './grantHeader.component.js'
import grantStatusComponent from './grantStatus.component.js'
import grantDescriptionComponent from './grantDescription.component.js'
import permissionsListComponent from './permissionsList.component.js'
import grantQuestionComponent from './grantQuestion.component.js'
import grantButtonComponent from './grantButton.component.js'

const template = ` 
  <div id="grant-component">
    <form id="grant-form">
      ${grantHeaderComponent.template}
      ${grantStatusComponent.template}
      ${grantDescriptionComponent.template}
      ${permissionsListComponent.template}
      ${grantQuestionComponent.template}
      ${grantButtonComponent.template}
    </form>         
  </div>`

const style = `
  #grant-component {
    background-color: #fff;
    width: 380px;
    margin: auto;  
    margin-top: 1%;    
    padding: 20px;
    min-height: 500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }  
  `

const grantComponent = new Component({ template, style })

export default grantComponent