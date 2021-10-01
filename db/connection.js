var mongoose = require('mongoose')
var connectionString = "mongodb+srv://jasmyne:papermill@jasmynedata.ovhlt.mongodb.net/dinery?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(connectionString,{useNewURLParser:true,useUnifiedTopology:true});
        console.log(`db connected ${connection.connection.host}`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;