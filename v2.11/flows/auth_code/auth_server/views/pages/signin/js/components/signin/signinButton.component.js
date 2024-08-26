'use strict'

// import navbarComponent from "./navbar/navbar.component.js"


const signinButtonComponent = {
  template: `
    <div id="signin-button-component">
        <input type="submit" value="Sign in" id="signin-button">
    </div>`,
  style: `
  #signin-button {
    width:100%;
    padding:4%;
    color:#fff;
    background-color:#0061a2;
    border:0;
    border-radius:50px;
    font-size: 18px;    
  }
  #signin-button-component{
    padding: 4%;
    align-items: center;
  }
  #signin-button:hover{
   color: #f0f0f0;   
   background-color:#004182;
  }`
}

export default signinButtonComponent