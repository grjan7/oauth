'use strict'

import { postSignout } from "./apiCalls.js"

const setEventsService = async () => {
  const signoutLink = document.getElementById("signout-link")
  signoutLink.onclick = async () => {
    try {
      const data = { sessionID: 1225, accountID: 1254 }
      const response = await postSignout(data)
      if (response.status == 200) {
        window.location.href = '/signout'
      }
    } catch (e) {
      console.error(e)
    }
  }

}


export default setEventsService
