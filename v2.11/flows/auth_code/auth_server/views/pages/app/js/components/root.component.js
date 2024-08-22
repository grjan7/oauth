'use strict'

import signinComponent from "./signin/signin.component.js"


const rootComponent = {
  template: `
    <div>
        <div id="navbar-container">
          ${signinComponent.template}
        </div>
    </div>`,
  style: ``
}

export default rootComponent