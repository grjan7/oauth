'use strict'

// import navbarComponent from "./navbar/navbar.component.js"


const passwordComponent = {
  template: `
    <div id="password-component">
        <input type="password" name="password" placeholder="Password" id="password" required>
        
    </div>`,
  style: `#password {
    width:90%;
    padding:5%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);  
  }
  
  #password-component{  
    align-items:center; 
    padding:5%;  
  }`
}

export default passwordComponent