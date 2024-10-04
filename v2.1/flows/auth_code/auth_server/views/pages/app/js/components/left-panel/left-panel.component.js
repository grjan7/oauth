'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="left-panel-component" class="big-panel">  
    <ul id="side-nav">
      <li>Settings</li>
      <ul>
        <li>General</li>
        <li>Security</li>
      </ul>
    </ul>
  </div>
`

const style = `
  li {
    list-style-type: none;
  }
  
  

`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })