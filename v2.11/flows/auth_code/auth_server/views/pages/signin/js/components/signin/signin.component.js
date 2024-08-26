'use strict'

import passwordComponent from "./password.component.js"
import userNameComponent from "./username.component.js"
import signinButtonComponent from "./signinButton.component.js"
import signupButtonComponent from "./signupButton.component.js"


const signinComponent = {
  template: `
    <div id="signin-component">
      <h1 id="signin-header">Sign in </h1>
      ${userNameComponent.template}
      ${passwordComponent.template}
      ${signinButtonComponent.template}
      <div>
      <p id="signup-text" class="line-heading">Don't you have an account?</p>
      </div>
      ${signupButtonComponent.template}
      <p id="status-text"></p>
    </div>`,

  style: `#signin-component{
    background-color:#fff;
    width:380px;
    margin:auto;  
    margin-top:1%;    
    padding: 20px;
    min-height:500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }

  #signin-header{
  text-align:center;
  color:#004182;
  font-weight:600;
  }
  `
}

export default signinComponent