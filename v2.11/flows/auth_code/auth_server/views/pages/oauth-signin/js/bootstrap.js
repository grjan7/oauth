'use strict'

// initialize the objects and services that need to be available
// during bootstrapping the application 

import rootComponent from './components/root.component.js'
import { Component } from './core/component.class.js'

const bootstrapApp = async () => {
  const root = document.getElementById('root')
  root.innerHTML = rootComponent.template
  Component.setStyles()
  Component.initEventHandlers()
}

export default bootstrapApp