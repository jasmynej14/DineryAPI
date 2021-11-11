const restaurants = require('./data')
const connect = require('./connection')
const Restaurant = require('../models/restaurantModel')
const Menu = require('../models/menuModel')
const Item = require('../models/itemModel')
const Review = require('../models/reviewModel')
connect()


Review.create({restaurant:"6155dab9ed2ddfbc236a1963",rating:4,reviewContent:"Great Place for Lunch",reviewer:"Jasmyne"})
