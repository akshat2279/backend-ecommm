import express, { Request, Response } from "express";
const addtocart = require('../../../models/addtocart');

// delete cart items

export const Deletecartitem = async (req: Request, res: Response) => {
    try {
        const { user, product } = req.query;

        const result = await addtocart.deleteOne({ user, product })
        res.status(200).json({
            status: true,
            message: "product deleted",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: true,
            message: "product cannot be deleted",
        })
    }
}