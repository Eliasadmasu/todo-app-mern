import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  loads: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Number,
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("todo", TodoSchema);

export default TodoModel;
