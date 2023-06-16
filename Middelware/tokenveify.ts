import express, { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');
require('dotenv').config();


// user jwt token verify middleware
export const iscustomer = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header("Authorization")?.replace("Bearer ","")

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (decode.isAdmin === false) {
        next();
    }
    else {
        res.send("token failed")
    }
}

// admin jwt token verify middleware
export const isadmin = (req: Request, res: Response, next: NextFunction) => {


    const token = req.header("Authorization")?.replace("Bearer ","");
      console.log(token)

    const decode = jwt.verify(token, process.env.SECRET_KEY);
     console.log(decode)

    if (decode.isAdmin === true) {
        next();
    } else {
       return res.send("token failed")
    }




}
