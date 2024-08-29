'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="grant-question-component">
    <p id="grant-question">Do you want to allow?</p>  
  </div>`


const grantQuestionComponent = new Component({ template })

export default grantQuestionComponent