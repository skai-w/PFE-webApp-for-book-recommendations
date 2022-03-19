const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const BookCtrl = require('../controller/bookctrl')

//all books route

router.get('/',BookCtrl.SearchBook)

// New book Route
router.get('/add',BookCtrl.registerBook )

// Create book Route
router.post('/', async (req, res) => {
   
  const book = new Book({
    titre: req.body.titre ,
    auteur: req.body.auteur ,
    image: req.body.image,
    genre: req.body.genre
  })
  
     await book.save().then(item=>
       { console.log("done save")

        res.redirect('/books')}
     )
    // res.redirect(`authors/${newAuthor.id}`)
    
   
   .catch ()
   
})

router.get('/news',BookCtrl.NewBooks)
router.get('/news')


module.exports = router