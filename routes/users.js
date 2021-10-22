var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
/* GET users listing. */

router.get('/:id',asyncHandler(async (req,res) => {
  const user = await User.findById(req.params.id).populate('favorites')
  res.json(user)
}))

router.post('/',asyncHandler(async (req,res) => {
    User.create(req.body,function(err,createdUser){
      res.json(createdUser)
    })
}))

router.post('/:id/favorite',asyncHandler(async (req,res) => {
  const user = await User.findById(req.params.id)
  user.favorites.push(req.body.restaurant)
  user.save()
  res.json(user)
}))

router.get('/:id/favorite',asyncHandler(async (req,res) => {
  const user = await User.findById(req.params.id).populate('favorites')
  res.json(user)
}))
module.exports = router;
