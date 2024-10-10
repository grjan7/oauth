'use strict'

import { Component } from 'lib/component.class.js'
import { AccountClient } from '../../services/clientSDK.js'

let accountInfo = {}
try {
  accountInfo = await AccountClient.getAccountInfo()
  console.log(accountInfo)
} catch (e) {
  throw new Error(e)
}

console.log(accountInfo)

const { firstname, lastname } = accountInfo

const template = `
  <div id="top-panel-component">
    <div id="logo-container">
      <p id="logo-text"><span class="blue-bold">OAuth</span> <span class="white-bold">2.1</span></p>
    </div>
    <div id="profile-container">
      <img src="" alt="" id="profile-img"></img>
      <p id="user-fullname">${firstname} ${lastname}</p>
      <div id="profile-menu" class="show-on-init-slow">
        <p id="signout-link"><span>Sign out</span></p>
      </div>
    </div>
  </div>
`

const style = `
  #top-panel-component {    
    display: grid;
    grid-template-columns: 20% 80%;
    background-color: #101010;   
  }

  #profile-img {
    float: right;
    padding: 1%;
  }

  #logo-container {    
    font-size: 1rem;
  }

  #logo-text {
    padding-left: 5%;
  }

  .blue-bold {
    color: #006585;
    font-weight: 600;
    
  }
  
  .white-bold {
    color: rgba(250, 250, 250, 0.9);
    font-weight: 600;
  }

  #profile-menu {
    position: absolute;        
    width: 5rem;
    right: 0.1rem;
    top: 3rem;
    display: none;  
    background-color: #191919;
    border-radius: 5%;
    padding: 1% 2%;
    margin: 0;
    z-index:1;   
  }  
  
  #profile-img {
    width: 24px;
    height: 24px;
    border-radius: 25px;
    background-color: black;
  }

  #signout-link {
    width: 100%;
    border-radius: 5%;
    padding: 2% 10%;
    background-color: #992929;
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