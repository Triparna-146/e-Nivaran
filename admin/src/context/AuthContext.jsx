import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInAdmin = localStorage.getItem("adminToken");
    if (loggedInAdmin) {
      setAdmin(loggedInAdmin);
    } else {
      navigate("/admin/login");
    }
  }, [navigate]);

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setAdmin(token);
    navigate("/admin/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setAdmin(null);
    navigate("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
