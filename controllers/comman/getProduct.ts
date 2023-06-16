import express, { Request, Response } from "express";
const product = require('../../models/product');

//get products admin
export const getProduct = async (req: Request, res: Response) => {
    try {
        const cat = await product.find({});

        res.status(200).json({
            status: true,
            data: cat
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "cannot find products",
        })
    }
}