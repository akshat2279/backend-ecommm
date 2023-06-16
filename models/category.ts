export {};
let mongoose = require("mongoose");

const acategory =  new mongoose.Schema({


   name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        unique: true,
       
    }

})
module.exports = mongoose.model("category",acategory)