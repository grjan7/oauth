'use strict'

// This module adds the imported styles of all components
// to the top-level <style> element in the <head>.
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

const setStyleService = () => {
  const styles = components.map(component => component.style).join('\n').replaceAll(/\n+|\t+/g, '')
  const style = document.getElementsByTagName('style')[0]
  style.innerHTML = styles
}

export default setStyleService