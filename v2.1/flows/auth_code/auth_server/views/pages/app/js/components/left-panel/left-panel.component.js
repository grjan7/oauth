'use strict'

import { Component } from 'lib/component.class.js'
import myAppsComponent from '../core/my-applications/my-applications.component.js'
import accountSettingsComponent from '../core/account-settings/account-settings.component.js'
import lastSessionsListComponent from '../core/last-sessions-list/last-sessions-list.component.js'

const template = `
  <div id="left-panel-component" class="big-panel">

    <div id="side-nav">

      <p id="home-link" class="link"><span class="dir-icon"></span> Home</p>      
      <p id="account-settings-link" class="link"><span class="dir-icon"></span> Account Settings</p>
      <p id="app-settings-link" class="li-head link"><span class="dir-icon">+</span> Applications Settings</p>

      <div id="app-sublist" class="show-on-init-very-slow">

        <p id="my-apps-link" class="li-0 link">My Applications</p>
        <p id="third-party-apps-link" class="li-0 link">Third-Party Apps</p>
        
      </div>

      <p id="last-sessions-link" class="link">Last Sessions</p>      
      <p id="logs-link" class="link">Logs</p>  

    </div>

  </div>
`

const style = `
  #side-nav p:hover {
    background-color: #101010;
  }
  
  .link {
    padding: 3% 5%;    
    margin: 0;
  }
  
  .link:hover {
    background-color: #101010; 
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
    const logsLink = document.getElementById('logs-link')
    const appSubList = document.getElementById("app-sublist")
    const lastSessionsLink = document.getElementById("last-sessions-link")

    const isAllElExist = mainPanel && homeLink && accountSettingsLink &&
      appSettingsLink && myAppsLink && thirdPartyAppsLink && logsLink && appSubList && lastSessionsLink

    if (isAllElExist) {
      // set my-apps-link handler
      const defaultColor = 'transparent'
      const onClickColor = '#101010'

      const links = document.querySelectorAll('.link')
      links.forEach(link => { link.onclick = async (e) => { link.style.backgroundColor = 'transparent' } })

      homeLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        homeLink.style.backgroundColor = onClickColor
      }

      accountSettingsLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        accountSettingsLink.style.backgroundColor = onClickColor
        accountSettingsComponent.load(mainPanel)
      }

      let appSubListVisible = false
      appSettingsLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        appSettingsLink.style.backgroundColor = onClickColor

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
        links.forEach(link => link.style.backgroundColor = defaultColor)
        myAppsLink.style.backgroundColor = onClickColor
        myAppsComponent.load(mainPanel)
      }

      thirdPartyAppsLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        thirdPartyAppsLink.style.backgroundColor = onClickColor
      }

      lastSessionsLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        lastSessionsLink.style.backgroundColor = onClickColor
        lastSessionsListComponent.load(mainPanel)
      }

      logsLink.onclick = async (e) => {
        links.forEach(link => link.style.backgroundColor = defaultColor)
        logsLink.style.backgroundColor = onClickColor
      }

    }
  }

}

export default new Component({ template, style, eventHandlers })