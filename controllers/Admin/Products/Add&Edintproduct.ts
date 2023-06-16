import express, { Request, Response } from "express";
const product = require('../../../models/product');
const category = require('../../../models/category');
export const addproduct = async (req: Request, res: Response) => {

    try {
        const { name, category, image, price, description, id } = req.body;

        const exists = await product.findOne({ _id: id })

        if (exists) {

            const data = await product.findByIdAndUpdate({ _id: id }, { name, category, image, price, description }, { new: true })
            res.status(200).json({
                status: true,
                message: "product updated",
                data: data
            })
        } else {
            const data = await product.create({ name, category, image, price, description })
            res.status(200).json({
                status: true,
                message: "product  created",
                data: data
            })
        }
    }

    catch (error) {

        res.status(400).json({
            status: false,
            message: "category not created",

        })
        

    }
}