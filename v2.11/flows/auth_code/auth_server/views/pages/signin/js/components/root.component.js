'use strict'

import { Component } from "../core/component.class.js"
import signinComponent from "./signin/signin.component.js"

const template = `
  <div>
    <div id="root-component">
      ${signinComponent.template}
    </div>
  </div>`

const rootComponent = new Component({ template })

export default rootComponent