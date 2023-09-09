import { useState } from "react";
import "./addtodo.css";
import axios from "axios";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const [TodoList, setTodoList] = useState({
    title: "",
    loads: "",
    reps: "",
  });
  const navigate = useNavigate();
  const [loginText, setLoginText] = useState("");
  const { token } = useAuth();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const response = await axios.post(
          "http://localhost:8800/api/addtodo",
          TodoList,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTodoList({ title: "", loads: "", reps: "" });
        console.log(response);
      } else {
        setLoginText("You must be Logged In To Access this");
        navigate("/login");
      }
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
            required={token}
            minLength={2}
          />
        </div>
        <div className="column">
          <label htmlFor="">Load (in kg):</label>
          <input type="number" name="loads" onChange={handleChange} />
        </div>
        <div className="column">
          <label htmlFor="">Reps:</label>
          <input
            type="number"
            name="reps"
            onChange={handleChange}
            required={token}
          />
        </div>
        <button className="button" type="submit">
          Add Workout
        </button>
        {loginText}
      </form>
    </div>
  );
};
export default AddTodo;
