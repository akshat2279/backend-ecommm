import { Request, Response } from "express";
const product = require('../../../models/product');


//user products  search , filter ,get products
export const CustomProduct = async (req: Request, res: Response) => {
  let result;
  try {

    const { category, name, page } = req.query;
   
    const Page: any = page || 1;
    const limit = 2;
    const offset = (Page - 1) * limit;

    if (category !== 'undefined' && name === 'no') { 
      result = await product.find({ category: category })
    }
    else if(category === 'no') {
      result = await product.find({name:{$regex:name,$options:'i'}})
    }
    else {
        result = await product.find({})
        .skip(offset)
        .limit(limit);
    }


    res.status(200).json({
      status: true,
      message: "product  found",
      data: result
    })


  }
  catch {
    res.status(400).json({
      status: false,
      message: "product not  found",
      data: result
    })

  }
} 