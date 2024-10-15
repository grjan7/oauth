'use strict'

import { Component } from 'lib/component.class.js'
import { AccountClient } from '../../../services/accountClient.class.js'

let lastSessionsList = `
  <div class="last-session-card">
    <p class="app-description">You last session list will live here.</p>
  </div>
`

const generateLastSessionsList = lastSession => `
  <div class="last-session-card" id="${lastSession._id}">
    <table>    
      <tr class="last-session">
        <td class="row-head">Started at</td>
        <td class="session-started-at last-session-info">${new Date(lastSession.startedAt).toUTCString()}</td>
      </tr>
      <tr>
        <td class="row-head">Ended at</td>
        <td class="session-expired-at last-session-info">${new Date(lastSession.expiredAt).toUTCString()}</td>
      </tr>
      <tr>
       <td class="row-head">User-agent</td>
       <td class="user-agent last-session-info">${lastSession.userAgent}</td>      
      </tr>
    </table>    
  </div>
`
try {
  const { lastSessions } = await AccountClient.getLastSessions()
  console.log(lastSessions)
  if (lastSessions.length > 0) {
    lastSessionsList = lastSessions.map(generateLastSessionsList).join("\n")
  }
} catch (e) {
  throw new Error(e)
}

const template = `
  <div id="last-sessions-list-component" class="show-on-init-very-slow">
    <p class="sub-head">Your last 10 sessions</p>
    ${lastSessionsList}
  </div>
`

const style = `

  .last-session-card {
    padding: 1% 3%;
    /*background-color: #101010;*/
    border-radius: 5px;
    margin: 1%;
  }

  .last-session-info {
    background-color: #101010;
  }

  .row-head {
    width: 20%;
  }
   
`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })