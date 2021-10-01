var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Item = require('../models/itemModel')

router.get('/',asyncHandler(async (req,res)=>{
    const allItems = await Item.find({}).populate('menu')
    res.send(allItems)
}))
module.exports = router;
