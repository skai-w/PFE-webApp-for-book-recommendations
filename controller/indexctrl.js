const Seller = require('../models/seller')
const User = require('../models/user')
const SellerCtrl = require('../controller/sellerctrl')
const UserCtrl = require('../controller/userctrl')


exports.loginIN =(req,res)=>{
    console.log('get')
    res.render('sellers/login',{session : req.session})

}



exports.loginMethod = (req,res)=>{
        console.log('post')
    
        User.find({mail : req.body.email,psw : req.body.password}, function(err,resultat){
            if(err){
                SellerCtrl.loginMethod
            }else{
              console.log(resultat)
              req.session.userid = resultat[0]._id
              req.session.isAuth = true
              req.session.type = 'user'
              res.redirect('/users')
              }})
}




exports.logoutMethod =(req,res) => {
  req.session.destroy(function(err){
    if(err){
      console.log(err)
    }else{
    res.redirect('/')
      
    }
  })
}