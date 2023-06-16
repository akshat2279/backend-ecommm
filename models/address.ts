import { Types } from "mongoose";

export {};
let mongoose = require("mongoose");

const address =  new mongoose.Schema({

    user:{
        type:Types.ObjectId,
        required:true

    },
    address:[{
        home:{
            type:String,
            required:true
           
        },
       street:{
            type:String,
            required:true
           
        },
        area:{
            type:String,
            required:true
           
        },
        city:{
            type:String,
            required:true
           
        },
        state:{
            type:String,
            required:true
           
        },
        pincode:{
            type:String,
            required:true
           
        },
        country:{
            type:String,
            required:true
           
        }
    


}]
   


})
module.exports = mongoose.model("address",address)