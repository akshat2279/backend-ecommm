import express, { Request, Response } from "express";
const address = require('../../../models/address');

export const Address = async (req: Request, res: Response) => {
  //add addresss

  const { user, home, street, area, city, state, pincode, country } = req.body[0];

  try {
    const existingAddress = await address.findOne({ user, address: { $elemMatch: { home, street } } });
    if (existingAddress) {
      res.status(200).json({
        status: true,
        message: "Address already exists"
      })
    }
    else {
      const newAddress = await address.findOneAndUpdate(
        { user },
        { $push: { address: { home, street, area, city, state, pincode, country } } },
        { new: true, upsert: true }
      );

      res.status(200).json({
        status: true,
        message: "Address saved",
        data: newAddress
      });
    }
  } catch (error) {
    res.status(200).json({
      status: true,
      message: "address not saved",
    })

  }
}