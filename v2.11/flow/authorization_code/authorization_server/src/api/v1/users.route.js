'use strict'

import { Router } from 'express'
import usersCtrl from './users.controller.js'

const router = new Router()

router
  .route('/')
  .get(usersCtrl.listUsers)
  .post(usersCtrl.addUser)

router
  .route('/:userId')
  .get(usersCtrl.getUserById)
  .put(usersCtrl.updateUserById)
  .delete(usersCtrl.deleteUserById)


export default router