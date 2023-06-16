import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const deleteproduct = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
    
        

        user: Joi.string(),
        product: Joi.string(),
       
       


    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
