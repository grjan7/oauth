'use strict'

// import navbarComponent from "./navbar/navbar.component.js"


const userNameComponent = {
  template: `
    <div id="username-component">      
      <input id="username" name="session-key" required="" validation="email" value="" autofocus="" type="text" placeholder="username">
    </div>`,
  style: `#username{
    width:90%;
    padding:5%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }
  
  #username-component{
    align-items:center; 
    padding:5%;
  }
  `
}

export default userNameComponent
