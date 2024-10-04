'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="main-panel-component" class="big-panel">
    <p>Main panel lives here!</p>
  </div>
`

const style = `
  
`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })