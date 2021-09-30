var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Restaurant = require('../models/restaurantModel')
router.get('/', (req,res)=>{

    res.send('restaurants')
})
module.exports = router;