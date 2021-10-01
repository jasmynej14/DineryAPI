var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Restaurant = require('../models/restaurantModel')


router.get('/', asyncHandler(async (req,res)=>{
    const allRestaurants = await Restaurant.find({})
    res.send(allRestaurants)
}))

router.get('/:id',asyncHandler(async (req,res)=>{
    const restaurant = await Restaurant.findById(req.params.id)
    res.send(restaurant)
}))
module.exports = router;