import express, { Request, Response } from "express";
const addtocart = require('../../../models/addtocart');

export const addcart = async (req: Request, res: Response) => {

    //update the cart product
    const { product, user, quantity } = req.body;
    console.log("product, user, quantity",product, user, quantity)
    try {

        const userexist = await addtocart.find({ user })
        const productexist = await addtocart.findOne({ product, user })

        if (userexist.length === 0 || !productexist) {
           const data = await addtocart.create({ product, user, quantity })
            return res.status(200).json({
                status: true,
                message: "cart item created",
                data: data

            })
       }

        if (productexist) {
            const data = await addtocart.updateOne({ product, user }, {$set:{quantity:quantity}})
            console.log("update",data)
            return res.status(200).json({
                status: true,
                message: " cart updated",
                data: data
            }
            )
        } else {
            const data = await addtocart.create({ product, user, quantity })
            return res.status(200).json({
                status: true,
                message: " cart created",
                data: data
            })
        }

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "cannot added to cart",

        })
}}

