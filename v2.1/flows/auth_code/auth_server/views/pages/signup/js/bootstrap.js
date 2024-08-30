'use strict'

// initialize the objects and services that need to be available
// during bootstrapping the application

import { Component } from 'lib/component.class.js'
import rootComponent from './components/root.component.js'


const bootstrapApp = async () => {
  const root = document.getElementById('root')
  root.innerHTML = rootComponent.template
  Component.setStyles()
  Component.initEventHandlers()
}

export default bootstrapApp