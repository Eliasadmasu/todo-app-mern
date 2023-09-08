import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link className="logo" to={"/"}>
        Workout Buddy
      </Link>

      <div className="gap">
        <Link>Login</Link>
        <Link to={"register"}>Register</Link>
      </div>
    </div>
  );
};
export default Navbar;
