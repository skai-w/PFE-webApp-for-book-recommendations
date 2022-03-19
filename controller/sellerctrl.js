const Seller = require('../models/seller')

exports.registerSeller = (req, res) => {
    res.render('sellers/new', { seller: new Seller() ,session : req.session})
  }
  

exports.loginSeller = (req, res) => {
  res.render('sellers/login',{session : req.session})
}



exports.loginMethod = (req, res) => {
  Seller.find({mail : req.body.email,psw : req.body.password}, function(err,resultat){
    if(err){
      console.log(err)
    }else{
      console.log(resultat)
      req.session.userid = resultat[0]._id
      req.session.isAuth = true
      req.session.type = 'seller'
      res.redirect('/sellers')
  }})
}

