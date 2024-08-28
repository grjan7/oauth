'use strict'

import { Component } from '../../../../../lib/component.class.js'

const template = `
  <div id="signup-header-component">
    <h1 id="signup-header">Sign up</h1>
  </div>`

const style = `
  #signup-header {
    text-align: center;
    color: #004182;
    font-weight: 600;
  }`

const signupHeaderComponent = new Component({ template, style })

export default signupHeaderComponent