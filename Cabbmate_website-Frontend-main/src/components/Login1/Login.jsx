import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.jpg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    navigate("drawer");
  };

  const handleSignUp = () => {
    navigate("signup");
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <div
        className="d-flex flex-column align-items-center justify-content-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <img src={Logo} className="w-25 mb-2" alt="Logo" />
        <h1 className="font-weight-bold mt-2">Login</h1>
        <div className="d-flex flex-column w-100 mt-4">
          <div className="d-flex flex-column mb-4">
            <label htmlFor="username" className="mb-2 font-weight-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control border border-dark rounded p-2"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="d-flex flex-column mb-4">
            <label htmlFor="password" className="mb-2 font-weight-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control border border-dark rounded p-2"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="btn btn-success text-white font-weight-semibold w-100"
          style={{ backgroundColor: "#188754" }}
        >
          LOGIN
        </button>
        <div className="w-100 mt-4 d-flex align-items-start">
          <span className="font-weight-semibold">
            Don't have an account?{" "}
            <button
              onClick={handleSignUp}
              className="btn btn-link text-primary"
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
