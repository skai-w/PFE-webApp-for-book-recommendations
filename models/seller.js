const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    surname:{
        type : String,
    },
    adr:{
        type : String,
    },
    willaya:{
        type : String,
        required : true
    },
    mail:{
        type : String,
        required : true
    },
    psw:{
        type : String,
        required : true
    },
    num:{
        type : String,
        required : true
    }

})

module.exports = mongoose.model('Seller',sellerSchema)