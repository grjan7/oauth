'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signup-header-component">
    <h1 id="signup-header">Sign up</h1>
  </div>`

const style = `
  #signup-header {
    text-align: center;
    color: #0061a2;
    font-weight: 600;
    width: 100%;    
  }`

const signupHeaderComponent = new Component({ template, style })

export default signupHeaderComponent