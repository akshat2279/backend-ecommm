import express, { Request, Response } from "express";
const addtocart = require('../../../models/addtocart');
const product = require('../../../models/product');
import mongoose from "mongoose";
export const Getcart = async (req: Request, res: Response) => {

 // find all the products for particular user 
    const{userid} = req.body
    const result =  await addtocart.aggregate([
        {
        $match:{
            user: new mongoose.Types.ObjectId(userid as string),
         }
        },
        {
          $lookup: {
            from: "products",
            localField: "product",
            foreignField: '_id',
            as: "item"
          }
        }
     ])  
    
     res.status(200).json({
       status: true,
       message: "Added to cart created",
       data: result,
     });


}
