'use strict'

import { Component } from 'lib/component.class.js'
import createApplicationComponent from './create-application.component.js'
import applicationListComponent from './application-list.component.js'

const template = `
  <div id="my-applications-component" class="show-on-init-very-slow">
    ${createApplicationComponent.template}
    ${applicationListComponent.template}
  </div>
`
const style = ``
const eventHandlers = {}

export default new Component({ template, style, eventHandlers })