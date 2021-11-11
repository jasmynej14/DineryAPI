var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler')
const Review = require("../models/reviewModel")

router.get('/',asyncHandler(async (req,res)=>{
    let allReviews = await Review.find(req.query)
    res.send(allReviews)

}))

router.post('/',asyncHandler(async (req,res)=>{
    Review.create(req.body,function(err,review){
        if(err){
            res.send(err)
        }
        else{
            res.send(review)
        }
    })
}))
module.exports = router