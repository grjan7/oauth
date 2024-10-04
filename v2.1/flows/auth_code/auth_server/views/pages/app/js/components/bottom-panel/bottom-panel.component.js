'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="bottom-panel-component">
    <p><span>&copy;</span><span>JsonalytiX</span></p>
  </div>
`

const style = `
  #bottom-panel-component {
    
  }
`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })