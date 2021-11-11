const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    restaurant:{type:mongoose.Schema.Types.ObjectId,ref:"Restaurant"},
    rating:String,
    reviewContent:String,
    reviewer:String
})

const Review = mongoose.model('Review',reviewSchema)
module.exports = Review