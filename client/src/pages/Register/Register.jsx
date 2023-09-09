import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dataTodSend = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://todo-app-mern-dun.vercel.app/api/register/api/",
        register
      );
      if (res.status === 201) {
        setError(res.data.message);
        navigate("/login");
      }
      console.log({ registration: res });
    } catch (err) {
      setError(err.response.data.message);
      console.error(err);
    }
  };

  // handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
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
          Register
        </button>
        {error}
      </form>
    </div>
  );
};
export default Register;
