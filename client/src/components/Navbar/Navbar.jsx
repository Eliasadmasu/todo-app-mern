import Cookies from "js-cookie";
import { useAuth } from "../context/UserContext";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const onLogout = () => {
    logout();
    Cookies.remove("auth_token");
  };
  const { token, logout, username } = useAuth();
  return (
    <div className="nav">
      <Link className="logo" to={"/"}>
        Workout Buddy
      </Link>

      <div className="gap">
        {token && (
          <div>
            <div>{username}</div>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
        {!token && (
          <div>
            <Link to={"/login"}>Login</Link>
            <Link to={"register"}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
