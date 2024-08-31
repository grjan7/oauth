'use strict'

import { Router } from 'express'

const router = new Router()

//router.route('/')
//.get(accountCtrl.listAccounts)

router.route('/:accountId')
  .get((req, res, next) => next())
//.get(accountCtrl.getAccountById)
//.put(accountCtrl.updateAccountById)
//.delete(accountCtrl.deleteAccountById)


router.use('/:accountId/client/:clientId', (req, res, next) => {
  const { accountId, clientId } = req.params;
  res.json({ accountId, clientId })
})

/*router.route('/lifecycle/steps/signup/name')
  .get(accountCtrl.getSignUpName)
  .post(accountCtrl.postSignUpName)

router.route('/lifecycle/steps/signup/birthdaygender')
  .get(accountCtrl.getSignUpBirthdayGender)
.post()

router.route('/lifecycle/steps/signup/username')
.get(accountCtrl.apiGetRegisterPage)
.post()

router.route('/lifecycle/steps/signup/password')
.get(accountCtrl.apiGetRegisterPage)
.post()


router.route('/signin')
.get()

router.route('/signin/identifier')
.get()
.post()

router.route('/signin/challange/pwd')
.get()
.post()

router.route('/signin/challange/dp')
.get()
.post()

router.route('/signin/oauth/consent')
.get()
.post()

router.route('/signin/oauth/id')
.get()
.post()

router.route('/signout')
.get()
.post()
*/
export default router