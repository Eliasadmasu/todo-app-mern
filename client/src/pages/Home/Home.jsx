import "./home.css";
import AddTodo from "../../components/AddTodo/AddTodo";
import Navbar from "../../components/Navbar/Navbar";
import TodoList from "../../components/TodoList/TodoList";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
};
export default Home;
