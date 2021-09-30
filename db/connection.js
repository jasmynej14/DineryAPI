var mongoose = require('mongoose')
var connectionString = "mongodb+srv://jasmyne:papermill@jasmynedata.ovhlt.mongodb.net/dinery?retryWrites=true&w=majority"

mongoose.connect(connectionString,{useNewURLParser:true,useUnifiedTopology:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db;