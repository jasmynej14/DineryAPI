var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Menu = require('../models/menuModel')
const Item = require('../models/itemModel')
router.get('/',asyncHandler(async (req,res)=>{
    const allMenus = await Menu.find({}).populate('restaurant')
    res.send(allMenus)
}))

router.get('/:id/items', asyncHandler(async (req,res) => {
    const fullMenu = {}
    const menu = await Menu.findById(req.params.id)
    const items = await Item.find({menu:menu})
    fullMenu.menu = menu
    fullMenu.items = items
    res.json(fullMenu)
}))

router.post('/',asyncHandler(async (req,res) => {
    const menu = {name:req.body.name,restaurant:req.body.restaurant}
    Menu.create(menu,function(err,createdMenu){
        res.json(createdMenu)
    })
}))
module.exports = router;