import express from "express";
import UserModel from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already in use" });
    } else {
      //Create a new user

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        username,
        password: hashedPassword,
      });
      await newUser.save();

      res.status(201).json({ message: "Registration successful" });
    }
  } catch (err) {
    console.log(err);
  }
};

export { register };
