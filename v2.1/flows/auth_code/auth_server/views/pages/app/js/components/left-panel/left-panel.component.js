'use strict'

import { Component } from 'lib/component.class.js'
import myAppsComponent from '../core/my-applications/my-applications.component.js'

const template = `
  <div id="left-panel-component" class="big-panel">  
    <div id="side-nav">
      <p id="home-link">Home</p>      
      <p id="account-settings-link">Account Settings</p>
      <p>Applications Settings<br>
        <span id="my-apps-link">My Applications</span><br>
        <span id="third-party-apps-link">Third-Party Apps</span>
      </p>
      <p id="logs-settings-link">Logs Settings</p>
    </div>
  </div>
`

const style = `
  
`

const eventHandlers = {

  leftPanelComponentHandlers: () => {
    const mainPanel = document.getElementById('main-panel-component')
    if (mainPanel) {


      // set my-apps-link handler
      const myAppsLink = document.getElementById('my-apps-link')
      if (myAppsLink) {
        myAppsLink.onclick = async (e) => {
          mainPanel.innerHTML = myAppsComponent.template
        }
      }

    }
  }

}

export default new Component({ template, style, eventHandlers })