'use strict'

import { Component } from 'lib/component.class.js'

// fetch appList data
// build appList template

// each app card must have options
//  edit -- lets the user view/update/delete the app 
//  view -- lets the user view the app details

const template = `
  <div id="create-application-component">
    <div id="create-application-button">    
      <div id="logo-icon">  
        <svg width="20" height="20" viewbox="0 0 24 24" focusable="false" style="fill:#f0f0f0;border-radius:50%;">
          <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
        </svg>
      </div>
      <div id="logo-icon-label">
        Create New Application
      </div>      
    </div>
  </div>
`

const style = `
  #create-application-button {
    background-color: #209920;
    padding: 2% 3%;
    display: grid;
    grid-template-columns: 15% 85%;
    border-radius: 5rem;
    /*border: 0.1rem solid #202020;*/
    
    font-weight:600;
  }
  
  #create-application-component {
    padding: 2%;
  }
   
`

const eventHandlers = {}

export default new Component({ template, style, eventHandlers })