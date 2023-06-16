import express, { Request, Response } from "express";
const address = require('../../../models/address');

//delete address

export const delAddress = async (req: Request, res: Response) => {

    const { user, index } = req.query;

    try {
        const re = await address.findOne({ user });
        re.address = re.address.filter((ele: any) => {
            return !ele._id.equals(index)
        });

        await re.save();

        res.status(200).json({
            status: true,
            message: "address deletd",
            data: re

        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "address not deleted",

        })
    }
}