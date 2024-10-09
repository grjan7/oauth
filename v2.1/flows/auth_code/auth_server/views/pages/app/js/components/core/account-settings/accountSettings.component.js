'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="account-settings-component">

  <div id="general-settings-component">
    <p class="sub-head">General Settings</p>
    
    <div id="personal-info-settings-component">
    </div>

  </div>

  <div id="advanced-settings-component">
    <p class="sub-head">Advanced Settings</p>
    
    <div id="email-change-component">
    </div>

    <div id="password-settings-component">
    </div>

    <div id="delete-account-component">
    </div>

  </div>

</div>`

const style = ``

const eventHandlers = {}

const accountSettingsComponent = new Component({ template, style, eventHandlers })