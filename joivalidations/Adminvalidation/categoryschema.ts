import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const categoryschema = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({

        name: Joi.string().required(),
        category: Joi.string().required(),


    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};
