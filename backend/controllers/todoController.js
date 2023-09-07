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
    const todoId = req.params.id;

    const todoDelete = await TodoModel.findById(todoId);

    if (!todoDelete) {
      return res.status(404).json({ error: "Todo not found" });
    }

    await TodoModel.findByIdAndRemove(todoId);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const todoUpdate = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, reps, loads } = req.body;

    const todoUpdate = await TodoModel.findById(todoId);

    if (!todoUpdate) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // update to do
    todoUpdate.title = title;
    todoUpdate.reps = reps;
    todoUpdate.loads = loads;
    await todoUpdate.save();

    res.status(200).json({ message: "Todo updated successfully" });
    res.status(500).json({ error: "Internal Server Error" });
  } catch (err) {
    console.error(err);
  }
};

export { TodoAdd, getTodo, deleteTodo, todoUpdate };
