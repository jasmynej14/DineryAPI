const allRestaurants = require('./seedData')
const connect = require('./connection')
const Restaurant = require('../models/restaurantModel')
const Menu = require('../models/menuModel')
const Item = require('../models/itemModel')
const Review = require('../models/reviewModel')
connect()

Restaurant.insertMany(allRestaurants,function(err){
    console.log(err)
})


