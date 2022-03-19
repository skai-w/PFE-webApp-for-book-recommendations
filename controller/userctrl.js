const User = require('../models/user')

exports.registerUser = (req, res) => {
    res.render('users/new', { user: new User() ,session : req.session})
  }

exports.loginUser = (req, res) => {
  res.render('users/login',{session : req.session})
}

exports.loginMethod = (req, res) => {
  User.find({mail : req.body.email,psw : req.body.password}, function(err,resultat){
    if(err){
      console.log(err)
    }else{
      console.log(resultat)
      req.session.userid = resultat[0]._id
      req.session.isAuth = true
      req.session.type = 'user'
      res.redirect('/users')
  }})
}

