const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var userSchema = new Schema({
    name:String,
    city:String,
    state:String,
    prefDining:String,
    favorites: {
        type:[{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"}],
        default:[]
    },
    email:String,
    password:String
})

const User = mongoose.model('User',userSchema)
module.exports = User
