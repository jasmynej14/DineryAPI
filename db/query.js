const Restaurant = require('../models/restaurantModel')
const Menu = require('../models/menuModel')
const Item = require('../models/itemModel')
const connect = require('./connection')

connect()

async function testPopulate(){
    const menu = await Menu.findOne({}).populate('restaurant')

    console.log(menu.restaurant.name)
    
}

testPopulate()
