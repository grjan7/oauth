'use strict'

import { Router } from 'express'
import tokenCtrl from './token.controller.js'

const router = new Router()

router.route('/')
  .get(tokenCtrl.listTokensByEmailId)
  .post(tokenCtrl.createTokensByAccountId)
  .delete(tokenCtrl.deleteTokensByAccountId)

router.route('/:tokenId')
  .get(tokenCtrl.getTokenByTokenId)
  .delete(tokenCtrl.deleteTokenByTokenId)

export default router