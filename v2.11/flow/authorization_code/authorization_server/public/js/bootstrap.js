'use strict'

// initialize the objects and services that need to be available
// during bootstrapping the application 

import rootComponent from './components/root.component.js'
import setStyleService from './services/setStyle.js'


const bootstrapApp = async () => {

  const root = document.getElementById('root')
  root.innerHTML = rootComponent.template
  setStyleService()

}

export default bootstrapApp