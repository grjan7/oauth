'use strict'

const signinStatusComponent = {
  template: `
  <div id="signin-status-component">
    <p id="signin-status-message"></p>
  </div>`,

  style: `#signin-status-message{  
    display:none;
    color: #852020;
    text-align:center;
    padding: 20px 10px;
    border: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-radius: 0px 10px 10px 10px;
    margin-left: 420px;
    position:absolute;    
  }`,

  eventHandlers: {}
}

export default signinStatusComponent