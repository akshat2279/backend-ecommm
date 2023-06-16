import express, { Request, Response } from "express";
const user = require("../../../models/user")

// user profile edit
export const UpdateUser = async (req: Request, res: Response) => {

    const { FirstName, LastName, Phone, Email, image } = req.body.user;

    try {
        const UserExsist = await user.findOne({ Email });
        if (UserExsist) {
            const data = await user.findOneAndUpdate({ Email: Email }, { FirstName: FirstName, LastName: LastName, Phone: Phone, image: image });
            res.status(200).json({
                status: true,
                message: "user update",
                data: data,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "error in user update",
        });
    }
};
