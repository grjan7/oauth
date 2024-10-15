'use strict'

import { Component } from 'lib/component.class.js'
import rootComponent from './components/root.component.js'

const bootstrapApp = async () => {
  const root = document.getElementById('root')
  rootComponent.load(root)
  Component.setStyles()
  Component.initAllEventHandlers()
}

export default bootstrapApp