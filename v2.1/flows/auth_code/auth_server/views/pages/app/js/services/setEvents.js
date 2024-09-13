'use strict'

import { AccountClient } from "./accountClient.js"

const setEventsService = async () => {
  const signoutLink = document.getElementById("signout-link")
  signoutLink.onclick = async () => {
    try {
      const response = await AccountClient.signout()
      console.log(response)
      if (response.status == 200) {
        window.location.href = '/signout'
      }
    } catch (e) {
      console.error(e)
    }
  }
}


export default setEventsService
