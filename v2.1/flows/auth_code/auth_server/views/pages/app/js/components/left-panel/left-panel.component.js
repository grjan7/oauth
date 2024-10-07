'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="left-panel-component" class="big-panel">  
    <div id="side-nav">
      <div class="li-0">
        <p>Settings</p>
        <div class="li-1">
          <p>General</p>
          <p>Security</p>
        </div>
      </div>
    </div>
  </div>
`

const style = `
  li {
    list-style-type: none;
  }
  
  

`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })