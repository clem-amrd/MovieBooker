import { createContext, useContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const storedToken = localStorage.getItem("access_token");

  const [user, setUser] = useState({
    isLoggedIn: !!storedToken,
    access_token: storedToken,
  });

  async function register({ username, email, password }) {
    try {
      const res = await axios.post("https://prolinker.onrender.com/user/auth/register", {
        username,
        email,
        password,
      });
      const { access_token } = res.data;
      setUser({
        isLoggedIn: true,
        access_token,
      });
      localStorage.setItem("access_token", access_token);

      return true;
    } catch (error) {
      console.error("Register error:", error?.response?.data || error.message);
      return false;
    }
  }

  async function login({ email, password }) {
    try {
      const res = await axios.post("https://prolinker.onrender.com/user/auth/login", {
        email,
        password,
      });
      const { access_token } = res.data;

      setUser({
        isLoggedIn: true,
        access_token,
      });
      localStorage.setItem("access_token", access_token);
      return true;
    } catch (error) {
      console.error("Login error:", error?.response?.data || error.message);
      return false;
    }
  }

  function logout() {
    setUser({ username: "", isLoggedIn: false, access_token: null });
    localStorage.removeItem("access_token");
  }

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
}