'use strict'

const signupLinkButtonComponent = {

  template: `
    <div id="signup-link-button-component">
        <input type="submit" value="Sign up" id="signup-link-button" tabindex="4">
    </div>`,

  style: `
  #signup-link-button {
    width:100%;
    padding:4%;
    color: #009020;
    border:1px solid #009020;
    background-color: transparent;
    border-radius:50px;
    font-size: 18px;
  }

  #signup-link-button-component{
   padding: 4%;
   align-items: center;
  }
   
  #signup-link-button:hover{
   color: #f0f0f0;
   border:0px;
   background-color:#009020;
  }`,

  eventHandlers: {
    signupLinkHandler: () => {
      const signupLink = document.getElementById("signup-link-button")
      signupLink.onclick = () => {
        window.location.href = '/signup'
      }
    }
  }
}

export default signupLinkButtonComponent