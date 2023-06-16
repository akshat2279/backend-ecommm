import { Types } from "mongoose";

export {};
let mongoose = require("mongoose");

const addtocart =  new mongoose.Schema({


    product:{
        type:Types.ObjectId,
        required:true
       
    },
    user:{
        type:Types.ObjectId,
        required:true
       
    },
    quantity:{

        type:Number,
        required:true
    }


})
module.exports = mongoose.model("addtocart",addtocart)