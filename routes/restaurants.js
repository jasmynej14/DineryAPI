var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Restaurant = require('../models/restaurantModel')


router.get('/', asyncHandler(async (req,res)=>{
    let allRestaurants;
    if(JSON.stringify(req.query) === '{}'){
        allRestaurants = await Restaurant.find({})
    }
    else{
        allRestaurants = await Restaurant.find(req.query)
    }
    res.send(allRestaurants)
}))

router.get('/:id',asyncHandler(async (req,res)=>{
    const restaurant = await Restaurant.findById(req.params.id)
    res.send(restaurant)
}))
module.exports = router;