'use strict'

import { Component } from '../../../../lib/component.class.js'
import signupComponent from './signup/signup.component.js'

const template = `
  <div>
    <div id="root-component">
      ${signupComponent.template}
    </div>
  </div>`

const rootComponent = new Component({ template })

export default rootComponent