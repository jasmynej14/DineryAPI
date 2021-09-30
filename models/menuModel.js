const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var menuSchema = new Schema({
    name:String,
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"}
})

const Menu = mongoose.model('Menu',menuSchema)
module.exports = Menu;