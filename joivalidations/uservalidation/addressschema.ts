import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const addressschema = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({


        
       
        user: Joi.string().required(),
        home: Joi.string().required(),
        street:Joi.string().required(),
        area:Joi.string().required(),
        city:Joi.string().required(),
        state:Joi.string().required(),
        pincode:Joi.string().required(),
        country:Joi.string().required(),


    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
