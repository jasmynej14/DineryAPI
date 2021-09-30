const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var menuSchema = new Schema({
    name:String,
    restaurant: mongoose.ObjectID
})

const Menu = mongoose.model('Menu',menuSchema)
module.exports = Menu;