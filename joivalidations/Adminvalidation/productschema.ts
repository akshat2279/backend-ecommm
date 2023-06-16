import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const productschema = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
    
     

        name: Joi.string().required(),
        category: Joi.string().required(),
        image:Joi.string().required(),
        price:Joi.number().required(),
        description:Joi.string().required(),
        id:Joi.string()

    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
