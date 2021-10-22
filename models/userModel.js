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
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User
