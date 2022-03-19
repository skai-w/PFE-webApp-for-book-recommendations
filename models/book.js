const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    titre:{
        type : String,
        required : true
    },
    auteur:{
        type : String,
        required : true
    },
    image :{
        type : String
    },
    genre:{
        type:String,
        required : true

    }

    
})

module.exports = mongoose.model('Book',bookSchema)