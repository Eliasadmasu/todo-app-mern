import { useEffect, useState } from "react";
import "./todolist.css";
import axios from "axios";

const TodoList = () => {
  const [TodoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/todos");
        setTodoList(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodo();
  }, []);

  return (
    <div className="mainTodo">
      <h3> TodoLists</h3>
      <ul className="cont">
        {TodoList.map((todo) => (
          <div key={todo._id} className="listCont">
            <h4>{todo.title}</h4>
            <h5>Load(kg): {todo.loads}</h5>
            <h5>Reps: {todo.reps}</h5>
            <h6>Created Date: {new Date(todo.createdDate).toLocaleString()}</h6>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
