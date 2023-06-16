import { Types } from "mongoose";

export {};
let mongoose = require("mongoose");

const product =  new mongoose.Schema({


   name:{
        type:String,
        required:true
    },
    category:{
        type:Types.ObjectId,
        required:true
       
    },
   image:{
        type:String,
        required:true
       
    },
    price:{
        type:Number,
        required:true
       
    },
    description:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("product",product)