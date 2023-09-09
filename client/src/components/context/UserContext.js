import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const tokenFromCookie = Cookies.get("auth_token");
    const usernameFromCookie = Cookies.get("auth_username");
    if (tokenFromCookie) {
      setToken(tokenFromCookie);
    }
    if (usernameFromCookie) {
      setUsername(usernameFromCookie);
    }
  }, []);
  const login = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
  };
  const logout = () => {
    setToken(null);
    setUsername("");
    Cookies.remove("auth_username");
  };

  const authContextValue = {
    token,
    username,
    login,
    logout,
    // Add other properties or functions as needed
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
