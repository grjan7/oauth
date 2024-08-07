'use strict'

import { Router } from 'express'
import usersCtrl from './users.controller'

const router = new Router()

router
  .route('/')
  .get(usersCtrl.listUsers)
  .post('/', usersCtrl.addUser)

router
  .route('/:userId')
  .get(usersCtrl.getUserById)
  .delete(usersCtrl.deleteUserById)


export default router