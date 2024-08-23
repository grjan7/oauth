'use strict'

import passwordComponent from "./password.component.js"
import userNameComponent from "./username.component.js"
import signinButtonComponent from "./signinButton.component.js"


const signinComponent = {
  template: `
    <div id="signin-component">
      <h1 id="signin-header">Sign in </h1>
      ${userNameComponent.template}
      ${passwordComponent.template}
      ${signinButtonComponent.template}
      
      <p id="signup-text">Don't you have an account? <span id="sign-up-link"><a href="/signup">Sign Up</a></span></p>
      <p id="status-text"></p>
    </div>`,
  style: `#signin-component{
    background-color:#fff;
    width: 300px;
    margin:auto;  
    margin-top:5%;    
    padding: 20px;
    min-height:500px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);  
  }
  #signin-header{
    text-align:center;
  }

  #signup-text{
  border-top: 1px solid rgba(0,0,0,0.3);
  padding:5%;
  }
  `
}

export default signinComponent