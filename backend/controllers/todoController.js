import express from "express";
import mongoose from "mongoose";
import TodoModel from "../models/todoSchema.js";

const TodoAdd = async (req, res) => {
  const { title, reps, loads } = req.body;

  try {
    const newTodo = new TodoModel({
      title,
      reps,
      loads,
    });
    await newTodo.save();
    res.status(201).json("New Todo Added");
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getTodo = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

export { TodoAdd, getTodo, deleteTodo };
