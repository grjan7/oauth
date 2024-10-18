'use strict'

import { Component } from 'lib/component.class.js'
import { AccountClient } from '../../services/clientSDK.js'

let accountInfo = {}
try {
  accountInfo = await AccountClient.getAccountInfo()
  //console.log(accountInfo)
} catch (e) {
  throw new Error(e)
}

console.log(accountInfo)

const { firstname, lastname, email } = accountInfo

const template = `
  <div id="top-panel-component">
    <div id="logo-container">
      <p id="logo-text"><span class="blue-bold">OAuth</span> <span class="white-bold">2.1</span></p>
    </div>
    <div id="profile-container">
      <div id="profile-name">
        <div>
          <img src="" alt="" id="profile-img"></img>
        </div>
        <div>
          <p id="user-fullname">${firstname} ${lastname}</p>
        </div>
      </div>
      <div id="profile-menu" class="show-on-init-slow">
        <div>
          <p id="profile-email">${email}</p>
        </div>
        <div id="signout-container">
          <div id="signout-icon-svg">
            <svg height="16" width="16" viewBox="0 0 24 24" focusable="false" class="highlight">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
          <div id="signout-link-container">
            <span id="signout-link">Sign out</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`

const style = `
  #top-panel-component {    
    display: grid;
    grid-template-columns: 80% 20%;    
    max-width:100vw;
    max-height:6vh;    
  }

  #profile-img {    
    padding: 5%;
    border: 0.15rem dashed #909090;
  }

  #user-fullname {
    text-wrap: wrap;
    margin: 0;
    padding: 5% 2%;
    
  }

  #logo-container {    
    font-size: 1rem;
  }

  #profile-container {    
    position: relative;
    left: 6rem;
    top: 0.4rem;
    z-index:1;
  }

  #logo-text {
    padding-left: 1.9rem;
  }

  .blue-bold {
    color: #006585;
    font-weight: 600;    
  }
  
  .white-bold {
    color: rgba(250, 250, 250, 0.9);
    font-weight: 600;
  }

  #profile-name {
    display: grid;
    grid-template-columns: 30% 70%;
    width: 50%;
  }

  #profile-email {
    padding: 0% 5%;
    text-align:center;
    
  }
    
  #profile-menu {
    position: relative;        
    width: 60%;
    left: 0.5rem;    
    top: 0.2rem;
    display: none;  
    background-color: #191919;
    border-radius: 5%;
    padding: 5% 0%;
    margin: 0;
    z-index: 1;   
  }  
  
  #profile-img {
    width: 24px;
    height: 24px;
    border-radius: 25px;
    background-color: black;
  }
  
  #profile-img:hover {
    border: 3px solid #f0f0f0;
  }

  #signout-container:hover {    
    background-color: #505050;
  }

  #profile-menu p {
    width: 80%;
    border-radius: 5%;
    padding: 2% 10%;    
  }

  #signout-container {
    display: grid;
    grid-template-columns: 20% 80%;
    background-color: #303030;
    padding: 0.5rem;
  }

`

const eventHandlers = {

  topPanelComponentHandlers: () => {

    const profileImgEl = document.getElementById('profile-img')
    let isProfileMenuVisible = false

    if (profileImgEl) {
      profileImgEl.onclick = async (e) => {
        isProfileMenuVisible = !isProfileMenuVisible
        const profileMenu = document.getElementById('profile-menu')
        if (isProfileMenuVisible) {
          if (profileMenu) {
            profileMenu.style.display = "block"
          }
        } else {
          profileMenu.style.display = "none"
        }
      }
    }

    const signoutLink = document.getElementById("signout-link")

    signoutLink.onclick = async (e) => {
      try {
        const response = await AccountClient.signout()
        if (response.status == 200) {
          window.location.href = '/signout'
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}


export default new Component({ template, style, eventHandlers })