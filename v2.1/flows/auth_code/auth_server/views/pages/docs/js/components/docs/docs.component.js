'use strict'

import { Component } from 'lib/component.class.js'

const template = ` 
  <div id="docs-component">
    <h1>Documentation</h1>
  </div>`

const style = `
  #docs-component {
    background-color: #fff;
    width: 380px;
    margin: auto;  
    margin-top: 1%;    
    padding: 20px;
    min-height: 500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }  
  `

const docsComponent = new Component({ template, style })

export default docsComponent