'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signin-header-component">
    <p id="signin-header">Sign in</p>
  </div>`

const style = `
  #signin-header {
    text-align: center;
    color: #f0f0f0;
    font-size: 2rem;
  }`

const signinHeaderComponent = new Component({ template, style })

export default signinHeaderComponent