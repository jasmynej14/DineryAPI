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

router.post('/login',asyncHandler(async (req,res) => {
  const user = await User.findOne({email:req.body.email})
  if(user && user.password === req.body.password){
    res.json({loggedIn:true,user:user})
  }
  else{
    res.json({loggedIn:false})
  }
}))
module.exports = router;
