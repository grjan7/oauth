'use strict'

import { Component } from 'lib/component.class.js'

// fetch appList data
// build appList template

// each app card must have options
//  edit -- lets the user view/update/delete the app 
//  view -- lets the user view the app details

const template = `
  <div id="create-application-component">    
    <input type="submit" id="create-application-button" value="+ Create New Application">
  </div>
`

const style = ``

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })