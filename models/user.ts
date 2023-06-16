export {};
let mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
      FirstName:{
            type:String,
            required:true,
            maxLength:50
        },
        LastName:{
            type:String,
            required:true,
            maxLength:50
        },
        Email:{
            type:String,
            required:true,
            maxLength:50
        },
        Phone:{
            type:Number,
            required:true,
            maxLength:50
        },
        Password:{
            type:String,
            required:true,
            
        },
        image:{
            type:String,
           
        },
        
        isAdmin:{
            type:Boolean,
            default: false
        }

 
        

    }
)
module.exports = mongoose.model("users",userSchema)