'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-status-component">
    <p id="signup-status-message"></p>
  </div>`

const style = `
  #signup-status-message {  
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

const signupStatusComponent = new Component({ template, style })

export default signupStatusComponent