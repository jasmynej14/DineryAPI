const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    name:String,
    type:String,
    menu: {type:mongoose.Schema.Types.ObjectId, ref:'Menu'},
    price:Number
})

const Item = mongoose.model('Item',itemSchema)
module.exports = Item;