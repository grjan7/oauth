'use strict'

import { Component } from 'lib/component.class.js'
import myAppsComponent from '../core/my-applications/my-applications.component.js'
import accountSettingsComponent from '../core/account-settings/account-settings.component.js'
import lastSessionsListComponent from '../core/last-sessions-list/last-sessions-list.component.js'

const template = `
  <div id="left-panel-component" class="big-panel">

    <div id="side-nav">

      <p id="home-link" class="link"><span class="dir-icon"></span> Home</p> 
           
      <p id="account-settings-link" class="link"><svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="highlight">
        <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
        <circle cx="12" cy="12" r="3.5"></circle>
      </svg> Account Settings</p>
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
    
  .highlight {
    fill: #f0f0f0;    
    /*stroke: #f0f0f0;*/
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