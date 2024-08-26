'use strict'

// import navbarComponent from "./navbar/navbar.component.js"


const passwordComponent = {
  template: `
    <div id="password-component">
        <label for="password" id="password-label">Password</label>
        <input type="password" name="password" placeholder="Password" id="password" required>        
    </div>`,
  style: `#password {
    width:90%;
    padding:4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);  
  }
  
  #password-component{  
    align-items:center; 
    padding:4%;  
  }
  #password-label{
    display:none;
    color:#004182;
    font-weight:600;
    padding:0px 0px 5px 0px;
  }`
}

export default passwordComponent