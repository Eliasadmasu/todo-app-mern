import { useEffect, useState } from "react";
import "./todolist.css";
import axios from "axios";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          "https://todo-app-mern-dun.vercel.app/todos"
        );
        setTodoList(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodo();
  }, [todoList]);

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(
        `https://todo-app-mern-dun.vercel.app/deletetodo/${todoId}`
      );
      if (response.status === 200) {
        // Remove the deleted todo from the list
        setTodoList((prevTodoList) =>
          prevTodoList.filter((todo) => todo._id !== todoId)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `https://todo-app-mern-dun.vercel.app/updatetodo/${editTodo._id}`,
        editTodo
      );
      if (response.status === 200) {
        // Update the edited todo in the list
        setTodoList((prevTodoList) =>
          prevTodoList.map((todo) =>
            todo._id === editTodo._id ? editTodo : todo
          )
        );
        setEditTodo(null); // Clear edit mode
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mainTodo">
      <h3>TodoLists</h3>
      <ul className="cont">
        {todoList.map((todo) => (
          <div key={todo._id} className="Conta">
            {editTodo && editTodo._id === todo._id ? (
              // Edit mode with input fields
              <div className="listCont one">
                <label htmlFor="">title</label>
                <input
                  type="text"
                  value={editTodo.title}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, title: e.target.value })
                  }
                />
                <label htmlFor="">Load(kg):</label>
                <input
                  type="text"
                  value={editTodo.loads}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, loads: e.target.value })
                  }
                />
                <label htmlFor="">Reps: </label>
                <input
                  type="text"
                  value={editTodo.reps}
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, reps: e.target.value })
                  }
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              // Displaying todo details
              <>
                <div className="listCont one">
                  <h4>{todo.title}</h4>
                  <h5>Load(kg): {todo.loads}</h5>
                  <h5>Reps: {todo.reps}</h5>
                  <h6>
                    Created Date: {new Date(todo.createdDate).toLocaleString()}
                  </h6>
                </div>
                <div className="actions">
                  <button onClick={() => handleEditTodo(todo)}>
                    <MdEdit size={20} />
                  </button>
                  <button
                    className="logobtn"
                    onClick={() => handleDeleteTodo(todo._id)}
                  >
                    <MdDeleteForever size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
