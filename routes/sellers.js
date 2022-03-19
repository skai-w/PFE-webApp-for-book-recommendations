const express = require('express')
const router = express.Router()
const Seller = require('../models/seller')
const Book = require('../models/book')
const SellerCtrl = require('../controller/sellerctrl')
const BookCtrl = require('../controller/bookctrl')

// dashboard Route
router.get('/',BookCtrl.SearchBook)

// New seller Route
router.get('/new',SellerCtrl.registerSeller )

// Create seller Route
router.post('/', async (req, res) => {
   
  const seller = new Seller({
    name: req.body.name ,
    surname: req.body.surname ,
    mail: req.body.mail ,
    num: req.body.num ,
    psw: req.body.psw ,
    adr: req.body.adr ,
    willaya: req.body.willaya
  })
  
     await seller.save().then(item=>
       { console.log("done save")

        res.redirect('/sellers/login')}
     )
    // res.redirect(`authors/${newAuthor.id}`)
    
   
   .catch ()
   
})

//login seller route 

router.get('/login',SellerCtrl.loginSeller)

router.post('/login',SellerCtrl.loginMethod)


module.exports = router