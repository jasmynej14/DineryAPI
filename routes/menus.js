var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Menu = require('../models/menuModel')

router.get('/',asyncHandler(async (req,res)=>{
    const allMenus = await Menu.find({}).populate('restaurant')
    res.send(allMenus)
}))
module.exports = router;