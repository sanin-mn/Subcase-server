const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({

    moviename:{
        type:String,
        required:[true,'moviename is required']
    },
    language:{
        type:String,
        required:[true,'language is required'],
    },
    director:{
        type:String,
        required:[true,'director is required']
    },
    transalator:{
        type:String,
        required:[true,'transalator is required']
    },
    genre:{
        type:String,
        required:[true,'genre is required']
    },
    imdb:{
        type:String,
        required:[true,'imdb is required']
    },
    info:{
        type:String,
        required:[true,'info is required']
    },
    movieImage:{
        type:String,
        required:[true,'image is required']
    },
    subfile:{
        type:String,
        required:[true,'subfile is required']
    },
    userId:{
        type:String,
        required:true
    }
})

const movies = mongoose.model('movies',movieSchema)

module.exports = movies