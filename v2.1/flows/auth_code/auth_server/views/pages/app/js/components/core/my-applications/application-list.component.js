'use strict'

import { Component } from 'lib/component.class.js'
import { ClientAppClient } from '../../../services/clientSDK.js'

let appLists = `
  <div class="app-card">
    <p class="app-description">You app list will live here.</p>
  </div>
`

const generateAppList = app => `
  <div class="app-card" id="${app._id}">
    <div class="app-name-container">
      <p class="app-name">${app.name}</p>
    </div>
    <div class="app-description-container">
      <p class="app-description">${app.description}</p>
    </div>
  </div>
`

try {
  const appsList = await ClientAppClient.listApps()
  if (appsList.length > 0) {
    appLists = appsList.map(generateAppList).join("\n")
  }
} catch (e) {
  throw new Error(e)
}

const template = `
  <div id="application-list-component">
    ${appLists}
  </div>
`

const style = `

  .app-card {
    margin: 0.8rem 0rem;    
  }

  #application-list-component {
    padding: 2%;    
  }

  .app-name-container {
    background-color: #0f0f0f;
    border: 0.1rem solid #0f0f0f;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    font-weight: 600;
    padding: 0% 3%;
  }
  .app-description-container {
    border: 0.1rem solid #0f0f0f; 
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    padding: 1% 3%;
  }

`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })