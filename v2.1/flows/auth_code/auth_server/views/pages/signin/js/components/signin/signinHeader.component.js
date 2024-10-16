'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signin-header-component">
    <h1 id="signin-header">Sign in</h1>
  </div>`

const style = `
  #signin-header {
    text-align: center;
    color: #909090;
    font-weight: 600;
  }`

const signinHeaderComponent = new Component({ template, style })

export default signinHeaderComponent