import "./home.css";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";
import { useAuth } from "../../components/context/UserContext.js";

const Home = () => {
  const { token } = useAuth();

  return (
    <div className="main">
      {token && <TodoList />}
      <AddTodo />
    </div>
  );
};
export default Home;
