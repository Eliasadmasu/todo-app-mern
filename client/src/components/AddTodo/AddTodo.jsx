import { useState } from "react";
import "./addtodo.css";
import axios from "axios";

const AddTodo = () => {
  const [TodoList, setTodoList] = useState({
    title: "",
    loads: "",
    reps: "",
  });

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/addtodo",
        TodoList
      );
      setTodoList({ title: "", loads: "", reps: "" });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoList({
      ...TodoList,
      [name]: value,
    });
  };

  return (
    <div style={{ flex: "3" }}>
      <h3> Add New Workout</h3>
      <form onSubmit={sendData} className="form">
        <div className="column">
          <label htmlFor="">Exercise Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            required
            minLength={2}
          />
        </div>
        <div className="column">
          <label htmlFor="">Load (in kg):</label>
          <input type="number" name="loads" onChange={handleChange} />
        </div>
        <div className="column">
          <label htmlFor="">Reps:</label>
          <input type="number" name="reps" onChange={handleChange} required />
        </div>
        <button className="button" type="submit">
          Add Workout
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
