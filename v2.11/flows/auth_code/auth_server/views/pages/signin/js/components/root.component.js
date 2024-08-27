'use strict'

import { Component } from "../core/component.js"
import signinComponent from "./signin/signin.component.js"


const rootComponent = new Component({
  template: `
    <div>
        <div id="navbar-container">
          ${signinComponent.template}
        </div>
    </div>`,

  style: ``,

  eventHandlers: {

  }
})

export default rootComponent