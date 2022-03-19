const express = require('express')
const session = require('express-session')
const router = express.Router()
const BookCtrl = require('../controller/bookctrl')

const indexCtrl = require('../controller/indexctrl')


router.get('/',BookCtrl.SearchBook)

router.get('/logout',indexCtrl.logoutMethod)





module.exports = router