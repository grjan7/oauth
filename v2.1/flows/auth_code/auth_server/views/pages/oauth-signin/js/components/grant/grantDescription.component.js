'use strict'

import { Component } from 'lib/component.class.js'

const appName = "Jsonalytics"

const template = `
  <div id="grant-description-component">
    <p id="grant-description">${appName} requests the following permissions:</p> 
  </div>`


const grantDescriptionComponent = new Component({ template })

export default grantDescriptionComponent