import express, { Request, Response } from "express";

const category = require('../../models/category');

// get categorys
export const getcategory = async(req:Request,res:Response)=>{

 try{
     

      const cat = await category.find({})
      
     
      res.status(200).json({
          status: true,
          data: cat
      })

 }catch(error){

    res.status(400).json({
        status: false,
        message: "cannot find category",
        
    })
    console.log(error)

 }
}