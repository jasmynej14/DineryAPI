var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Restaurant = require('../models/restaurantModel')

router.get('/',asyncHandler(async (req,res) => {
    let restaurant_1 = await Restaurant.findById(req.query.r1)
    let restaurant_2 = await Restaurant.findById(req.query.r2)
    res.json({res1:restaurant_1,res2:restaurant_2})
}))

module.exports = router