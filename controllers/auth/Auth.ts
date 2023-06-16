import express, { Request, Response } from "express";
const user = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let hasedPassword: String;

//user signup
export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { FirstName, LastName, Email, Phone, Password, image, isAdmin } =
      req.body;

    //find user
    const UserExsist = await user.findOne({ Email });
    console.log(UserExsist, "EXISTTT");

    //check if user already exists
    if (!UserExsist) {
      //encrypt password
      try {
        hasedPassword = await bcrypt.hash(Password, 10);
      } catch (err) {
        return res.json({
          message: "cannot encrypt password",
        });
      }

      //create entry in db
      const data = await user.create({
        FirstName,
        LastName,
        Email,
        Phone,
        Password: hasedPassword,
        image,
        isAdmin,
      });
     
      //data.Password = undefined;
      res.status(200).json({
        status: true,
        message: "user saved",
        data: data,
      });
    } else {
      res.json({
        status: false,
        message: "user already exists",
      });
    }
  } catch (error) {
    console.error(error);
    console.log("errorn in inserting data");
    res.status(400).json({
      status: false,
      message: "error in user insert",
    });
  }
};


//user login
export const Login = async (req: Request, res: Response) => {
  try {
    const { Email, Password } = req.body;

    // find user using email
    let UserExsist = await user.findOne({ Email });
    
    //check if user is registered
    if (UserExsist) {
      //payload for jwt
      const payload = {
        email: UserExsist.Email,
        isAdmin: UserExsist.isAdmin,
      };
      // compare passwords
       if (await bcrypt.compare(Password, UserExsist.Password)) {
        //token generate
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "8h",
        });
        //user object
        UserExsist = UserExsist.toObject();
        UserExsist.token = token;
        UserExsist.Password = undefined;


       return res.status(200).send({
          message: "okay",
          status: true,
          user: UserExsist,
        });
      }
      else{
     return res.status(200).send({
        message: "password inncorretc",
        status: false,
      })
    }}

    else {
     return res.status(200).send({
        message: "fail",
        status: false,
      });
    }

  } catch (error) {
    console.log(error, "errorn in login");
  }
};
