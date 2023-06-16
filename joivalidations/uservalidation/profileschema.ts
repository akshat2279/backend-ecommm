import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const profileschema = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
    
        

        FirstName: Joi.string().required(),
        LastName: Joi.string().required(),
        Email: Joi.string().required(),
        Phone:Joi.string().required(),
        image:Joi.string().required()

    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
