import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Dummy validation, replace with actual authentication logic
    if (username === "admin" && password === "admin123") {
        login("dummyToken");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 md:p-12">
        <div className="flex items-center justify-center mb-3">
          <FaUserShield className="text-blue-600 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Admin Login
        </h2>
        <p className="text-gray-600 text-sm text-center mb-8">
          Sign in to manage the complaint
        </p>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="mb-6">
            <p className="text-md m-1 font-semibold">Username</p>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <p className="text-md m-1 font-semibold">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
