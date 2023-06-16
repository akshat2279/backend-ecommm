import express, { Request, Response } from "express";
const product = require('../../../models/product');


//admin product delete
export const deletproduct = async (req: Request, res: Response) => {

    try {
        req.params.id

        const cat = await product.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({
            status: true,
            message: "product  deleted",

        })
    }
    catch (error) {

        res.status(400).json({
            status: false,
            message: "not deleted product"
        })
    }
}