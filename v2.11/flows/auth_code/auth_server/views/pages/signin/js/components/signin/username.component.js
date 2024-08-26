'use strict'

// import navbarComponent from "./navbar/navbar.component.js"


const userNameComponent = {
  template: `
    <div id="username-component">
      <label for="username" id="username-label">Username or Email</label>      
      <input id="username" name="username" required validation="email" value="" autofocus type="text" placeholder="Username or Email">
    </div>`,
  style: `#username{
    width:90%;
    padding:4%;  
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.6);
  }
  
  #username-component{
    align-items:center; 
    padding:4%;
  }

  #username-label{
    display:none;
    color:#004182;
    font-weight:600;
    padding:0px 0px 5px 0px;
  }
  `
}

export default userNameComponent
