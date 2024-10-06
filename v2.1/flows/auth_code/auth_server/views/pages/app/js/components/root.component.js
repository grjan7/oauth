'use strict'

import { Component } from 'lib/component.class.js'

import topPanelComponent from './top-panel/top-panel.component.js'
import bottomPanelComponent from './bottom-panel/bottom-panel.component.js'
import leftPanelComponent from './left-panel/left-panel.component.js'
import rightPanelComponent from './right-panel/right-panel.component.js'
import mainPanelComponent from './main-panel/main-panel.component.js'

const template = `
  <div id="root-component" class="show-on-init-very-slow">
    <div id="app-header">
      ${topPanelComponent.template}
    </div>
    <div id="app-body">
      ${leftPanelComponent.template}
      ${mainPanelComponent.template}
      ${rightPanelComponent.template}
    </div>
    <div id="footer">
      ${bottomPanelComponent.template}
    </div>
  </div>
`
const style = `
  #app-body {
    display: grid;
    grid-template-columns: 20% 50% 30%;
    margin-top: 0.5%;
  }

  #root-component {
    height: 100%;
    max-width:1350px;
    margin:auto;
  }
`
const eventHandlers = {}

export default new Component({ template, style, eventHandlers })