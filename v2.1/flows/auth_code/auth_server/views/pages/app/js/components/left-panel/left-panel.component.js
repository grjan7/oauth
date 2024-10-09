'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="left-panel-component" class="big-panel">  
    <div id="side-nav">
      <p>Home</p>
      <p>Personal Info</p>
      <p>Account Settings</p>
      <p>Applications Settings<br>
        <span>My Applications</span><br>
        <span>Third-Party Apps</span>
      </p>
      <p>Logs</p>
    </div>
  </div>
`

const style = `
  
`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })