const Book = require('../models/book')

exports.registerBook = (req, res) => {
    res.render('books/add', { book: new Book() ,session : req.session})
  }

exports.NewBooks = (req, res) => {
  res.render('/',{session : req.session})
}

exports.SearchBook = async (req, res) => {
  //affiche ga3 les livre de la bdd direct
  let searchOptions = {}
  if (req.query.titre != null && req.query.titre !== '') {
    searchOptions.titre = new RegExp(req.query.titre, 'i')
  }else {console.log('aaaaaaaaaaaaaaaa')}
  try {
    const books = await Book.find(searchOptions)
    res.render('books/index', {
      books: books,
      searchOptions: req.query ,
      session: req.session
    })
  } catch {
    res.redirect('/login')
  }
}
/*
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const eventSchema = require('./eventSchema');


mongoose.connect('mongodb://localhost:27017/pfedb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection to mongoDB succesful');
}).catch(err=>{
    console.log(err,'Connection to mongoDB failed');
});

(async()=>{
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto('https://booknode.com/decouverte/creme/livres?since=alltime',
                     {waitUntil: 'networkidle0'});
    let suivant = await page.evaluate(()=>{
        
    });
    const books= await page.evaluate(()=>{
        let books=[];
        let elements = document.querySelectorAll('div.col-lg-4');
        for(element of elements){
            books.push({
               img: element.querySelector('img').src,
               titre : element.querySelector('a').textContent,
               auteur : element.querySelector('h3').textContent
            });
        }
        return books;
    });
    const dataToSave = new eventSchema(books);
    dataToSave.save().then(()=>{
        console.log(books.titre, 'saved');
    }).catch(err=>{
        console.log(err,books.titre, 'saved');
    });
    
    await browser.close();

})();
*/ 

/*
const puppeteer = require('puppeteer');

//const jsdom=require("jsdom");
//const {JSDOM} = jsdom;
const mongoose = require('mongoose');
const eventSchema = require('./eventSchema');


mongoose.connect('mongodb://localhost:27017/pfedb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection to mongoDB succesful');
}).catch(err=>{
    console.log(err,'Connection to mongoDB failed');
});

(async()=>{
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto('https://www.babelio.com/livresapprecies.php?p=3',{waitUntil: 'networkidle0'});
    const books= await page.evaluate(()=>{
        let books=[];
        let elements = document.querySelectorAll('div.col-2-4');
        for(element of elements){
            books.push({
               img: element.querySelector('img').src,
               titre : element.querySelector('a').textContent,
               auteur : element.querySelector('h3').textContent
            });
        }
        return books;
    });
    const dataToSave = new eventSchema(books);
    dataToSave.save().then(()=>{
        console.log(books.titre, 'saved');
    }).catch(err=>{
        console.log(err,books.titre, 'saved');
    });
    
    await browser.close();

})();
*/
