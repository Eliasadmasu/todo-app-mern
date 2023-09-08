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

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserFound = await UserModel.findOne({ username });

    if (!UserFound) {
      res.status(401).json({ message: "User Not Found" });
    } else {
      const passwordCompare = await bcrypt.compare(
        password,
        UserFound.password
      );

      if (passwordCompare) {
        // Successful login
        res.status(200).json({ message: "Login successful" });
      } else {
        // Failed login
        res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export { register, login };
