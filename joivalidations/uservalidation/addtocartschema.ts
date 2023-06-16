import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const addtocartschema = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
    
        

       product: Joi.string().required(),
       user: Joi.string().required(),
       quantity:Joi.number().required(),
       


    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
