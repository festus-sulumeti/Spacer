import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const login = (id, accessToken) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("accessToken", accessToken);
    setUserId(id);
  };

  const adminLogin = (accessToken) => {
    localStorage.setItem("access_token", accessToken);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUserId(null);
  };

  const adminLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ userId, login, logout, adminLogin, adminLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
