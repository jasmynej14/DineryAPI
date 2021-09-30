const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    name: String,
    type:[String],
    cuisine:[String],
    location: {address: String,city:String,state:String,zipCode:String},
    rating: Number
})

const Restaurant = mongoose.model('Restaurant',restaurantSchema)
module.exports = Restaurant;