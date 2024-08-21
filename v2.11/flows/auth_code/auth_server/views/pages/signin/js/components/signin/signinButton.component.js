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
    padding:5%;
    color:#fff;
    background-color:#004182;
    border:0;
    border-radius:50px;
    font-size: 18px;
  }
  #signin-button-component{
  padding: 4%;
  align-items: center;
  }`
}

export default signinButtonComponent