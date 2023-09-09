import { useState } from "react";
import "../Register/register.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/UserContext";

const Login = () => {
  const { login } = useAuth();
  const [logins, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dataTodSend = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://todo-app-mern-dun.vercel.app/login/api/",
        logins
      );
      if (res.status === 200) {
        const tokenUser = res.data.token;
        const username = res.data.username;
        Cookies.set("auth_token", tokenUser, { expires: 7 });
        Cookies.set("auth_username", username, { expires: 7 });
        login(tokenUser, username);
        setError(res.data.message);
        navigate("/");
      }
      console.log(res);
    } catch (err) {
      setError(err.response.data.message || error);
      console.error(err);
    }
  };

  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...logins, [name]: value });
  };

  return (
    <div className="center">
      <form className="form" onSubmit={dataTodSend}>
        {/*  */}
        <div className="column">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleChange}
            min={2}
          />
        </div>
        {/*  */}
        <div className="column">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            minLength={4}
          />
        </div>
        {/*  */}
        <button type="submit" className="bton">
          Login
        </button>
        {error}
      </form>
    </div>
  );
};
export default Login;
