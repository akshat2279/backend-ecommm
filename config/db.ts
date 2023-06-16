import config from "./config";

const mongoose = require('mongoose');
require("dotenv").config();


// database connection
const dbconnect = ()=>{
    mongoose.connect(config.atlasUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("connected"))
    .catch(  (error:any)=>{
        console.log("issue in db connection");
        console.error("issu in db",error);
        process.exit(1);
    })
}

module.exports = dbconnect;