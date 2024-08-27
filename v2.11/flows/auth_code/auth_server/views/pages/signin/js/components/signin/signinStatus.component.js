'use strict'

import { Component } from '../../core/component.js'

const template = `
  <div id="signin-status-component">
    <p id="signin-status-message"></p>
  </div>`

const style = `
  #signin-status-message {  
    display: none;
    color: #852020;
    text-align: center;
    padding: 20px 10px;
    border: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-radius: 0px 10px 10px 10px;
    margin-left: 420px;
    position: absolute;    
  }`

const signinStatusComponent = new Component({ template, style })

export default signinStatusComponent