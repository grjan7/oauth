'use strict'

import { Router } from 'express'
import logCtrl from './logger.controller.js'

const router = new Router()

router.route('/')
  .get(logCtrl.listLogsByAccountId)
  .post(logCtrl.createLogByAccountId)
  .delete(logCtrl.deleteLogsByAccountId)

router.route('/:logId')
  .get(logCtrl.getLogByLogId)
  .delete(logCtrl.deleteLogByLogId)

export default router