var mongoose = require('mongoose')
var connectionString = "mongodb://jasmyne:papermill@jasmynedata-shard-00-00.ovhlt.mongodb.net:27017,jasmynedata-shard-00-01.ovhlt.mongodb.net:27017,jasmynedata-shard-00-02.ovhlt.mongodb.net:27017/dinery?ssl=true&replicaSet=atlas-4cuw7q-shard-0&authSource=admin&retryWrites=true&w=majority"

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