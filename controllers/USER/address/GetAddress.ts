import express, { Request, Response } from "express";
const address = require('../../../models/address');

//get address

export const GetAddress = async (req: Request, res: Response) => {
  

    const userid = req.query.user;
  

try{

    const data = await address.findOne({user:userid});

   if(data){
     res.status(200).json({
        status: true,
        message: "All Addresser",
        data: data
      });}

    else{
        res.status(200).json({
            status: false,
            message: "Address not found"
          });
    }  



}catch(error){
    res.status(200).json({
        status: false,
        message: "cannot find addresses",
        
    })



}


}