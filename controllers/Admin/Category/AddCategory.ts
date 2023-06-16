import express, { Request, Response } from "express";
const acategory = require('../../../models/category');

// category edit

export const addcategorys = async (req: Request, res: Response) => {

    try {
        const { name, category } = req.body;

        const data = await acategory.create({ category, name })
        res.status(200).json({
            status: true,
            message: "category created",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "category not created",

        })
    }
}