'use strict'

// This module initializes the imported eventHandlers of all components
//
// To Do: import all components and add the imported 
// component objects to the `components` array. 


// import all components
import rootComponent from '../components/root.component.js'
import signinComponent from '../components/signin/signin.component.js'
import signinButtonComponent from '../components/signin/signinButton.component.js'
import signinHeaderComponent from '../components/signin/signinHeader.component.js'
import siginPasswordComponent from '../components/signin/signinPassword.component.js'
import signinStatusComponent from '../components/signin/signinStatus.component.js'
import signinUsernameComponent from '../components/signin/signinUsername.component.js'
import signupLinkButtonComponent from '../components/signin/signupLinkButton.component.js'
import signupTextComponent from '../components/signin/signupText.component.js'

// include all imported components to this array
const components = [
  rootComponent,
  signinComponent,
  signinButtonComponent,
  signinHeaderComponent,
  signinStatusComponent,
  signinUsernameComponent,
  siginPasswordComponent,
  signupLinkButtonComponent,
  signupTextComponent
]

const setEvents = () => {
  for (let i in components) {
    let eventHandlers = components[i]["eventHandlers"]
    for (let eventHandler in eventHandlers) {
      if (eventHandler) {
        eventHandlers[eventHandler]()
      }
    }
  }
}

export default setEvents
