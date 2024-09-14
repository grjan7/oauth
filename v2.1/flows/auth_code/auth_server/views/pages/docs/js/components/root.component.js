'use strict'

import { Component } from 'lib/component.class.js'
import docsComponent from './docs/docs.component.js'

const template = `
  <div>
    <div id="root-component">
      ${docsComponent.template}
    </div>
  </div>`

const rootComponent = new Component({ template })

export default rootComponent