'use strict'

import { Component } from '../../core/component.js'

const signinHeaderComponent = new Component({

  template: `
  <div id="signin-header-component">
    <h1 id="signin-header">Sign in</h1>
  </div>`,

  style: `
  #signin-header{
    text-align:center;
    color:#004182;
    font-weight:600;
  }`,

  eventHandlers: {}
})

export default signinHeaderComponent