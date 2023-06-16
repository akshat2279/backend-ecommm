
import express, { Request, Response, NextFunction } from "express";

const Joi = require('joi');

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({

        FirstName: Joi.string().required(),

        LastName: Joi.string().required(),

        Email: Joi.string().email().required(),

        Phone: Joi.number().required(),

        Password: Joi.string().required(),

       image:Joi.string(),

        isAdmin: Joi.boolean().optional()

    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};



export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({

        Email: Joi.string().email().required(),
        Password: Joi.string().required(),


    });

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(200).json({ errors: error })
    }
    else {
        next();
    }
};



