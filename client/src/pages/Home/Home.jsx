import "./home.css";
import AddTodo from "../../components/AddTodo/AddTodo";
import Navbar from "../../components/Navbar/Navbar";
import TodoList from "../../components/TodoList/TodoList";

const Home = () => {
  return (
    <div className="main">
      <TodoList />
      <AddTodo />
    </div>
  );
};
export default Home;
