'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="signin-link-button-component">
    <input type="submit" value="Sign in" id="signin-link-button" tabindex="4">
  </div>`

const style = `
  #signin-link-button {
    width: 100%;
    padding: 4%;
    color: #009020;
    border: 1px solid #009020;
    background-color: transparent;
    border-radius: 50px;
    font-size: 18px;
  }

  #signin-link-button-component {
    padding: 3%;
    align-items: center;
  }

  #signin-link-button:hover {
    color: #f0f0f0;
    border: 0px;
    background-color: #009020;
  }`

const eventHandlers = {

  signinLinkHandler: () => {
    const signinLinkButton = document.getElementById("signin-link-button")
    signinLinkButton.onclick = (e) => {
      e.preventDefault()
      window.location.href = '/'
    }
  }

}

const signinLinkButtonComponent = new Component({ template, style, eventHandlers })

export default signinLinkButtonComponent