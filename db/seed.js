
const Restaurant = require('../models/restaurantModel')
const Menu = require('../models/menuModel')
const Item = require('../models/itemModel')

Menu.findOne({},function(err,menu){
    Item.create({name:"Caprese Salad",type:"Appetizer",menu:menu,price:13.99},function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('saved!')
        }
    })
})