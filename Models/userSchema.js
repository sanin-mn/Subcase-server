const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'User name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
})

const users = mongoose.model('users',userSchema)

module.exports = users