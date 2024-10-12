'use strict'

import { Component } from 'lib/component.class.js'
import myAppsComponent from '../core/my-applications/my-applications.component.js'
import accountSettingsComponent from '../core/account-settings/account-settings.component.js'

const template = `
  <div id="left-panel-component" class="big-panel">

    <div id="side-nav">

      <p id="home-link"><span class="dir-icon"></span> Home</p>      
      <p id="account-settings-link"><span class="dir-icon"></span> Account Settings</p>
      <p id="app-settings-link" class="li-head"><span class="dir-icon">+</span> Applications Settings</p>

      <div id="app-sublist" class="show-on-init-very-slow">

        <p id="my-apps-link" class="li-0"><span class="dir-icon"></span> My Applications</p>
        <p id="third-party-apps-link" class="li-0"><span class="dir-icon"></span> Third-Party Apps</p>
        
      </div>
      
      <p id="logs-settings-link"><span class="dir-icon"></span> Logs Settings</p>

    </div>

  </div>
`

const style = `
  #side-nav p:hover {
    background-color: #101010;
  }

  #side-nav p  {
    padding: 3% 5%;    
    margin: 0;
  }
  
  #side-nav {
    margin-top: 5%;
  }
  
  #app-sublist {
    display: none;
  }

  .dir-icon {
    margin-right: 0.2rem;
    color: #b0b000;
    font-weight: bold;    
  }  
  
`

const eventHandlers = {

  leftPanelComponentHandlers: () => {
    const mainPanel = document.getElementById('main-panel-component')
    const homeLink = document.getElementById('home-link')
    const accountSettingsLink = document.getElementById('account-settings-link')
    const appSettingsLink = document.getElementById('app-settings-link')
    const myAppsLink = document.getElementById('my-apps-link')
    const thirdPartyAppsLink = document.getElementById('third-party-apps-link')
    const logSettingsLink = document.getElementById('logs-settings-link')
    const appSubList = document.getElementById("app-sublist")

    const isAllElExist = mainPanel && homeLink && accountSettingsLink &&
      appSettingsLink && myAppsLink && thirdPartyAppsLink && logSettingsLink && appSubList

    if (isAllElExist) {
      // set my-apps-link handler
      let appSubListVisible = false

      accountSettingsLink.onclick = async (e) => {
        accountSettingsComponent.load(mainPanel)
      }

      appSettingsLink.onclick = async (e) => {
        appSubListVisible = !appSubListVisible
        if (appSubListVisible) {
          appSettingsLink.innerHTML = `<span class="dir-icon">&ndash;</span> Application Settings`
          appSubList.style.display = 'block'
        } else {
          appSettingsLink.innerHTML = `<span class="dir-icon">&plus;</span> Application Settings`
          appSubList.style.display = 'none'
        }
      }

      myAppsLink.onclick = async (e) => {
        myAppsComponent.load(mainPanel)
      }


    }
  }

}

export default new Component({ template, style, eventHandlers })