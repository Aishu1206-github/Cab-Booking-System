import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DriverLogin.css";
import Logo from "../../Assets/Logo.jpg";
import SignupDriver from "../SignupDriver/SignupDriver";

function DriverLogin() {
  const [showSignup, setShowSignup] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate username
    if (!name.trim()) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false); // Reset error when valid
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false); // Reset error when valid
    }

    if (isValid) {
      console.log("Login Form Submitted");
    }
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleFocus = (e) => {
    if (e.target.value.trim()) {
      e.target.classList.remove("border-red");
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      e.target.classList.add("border-red");
    } else {
      e.target.classList.remove("border-red");
    }
  };

  return (
    <>
      {/* Conditionally render SignupDriver when showSignup is true */}
      {showSignup ? (
        <SignupDriver />
      ) : (
        // If showSignup is false, display the driver login page
        <div className="driver-login-page">
          <div className="container">
            <div className="driver-login-container card p-4 shadow-sm bg-light">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    height: "50px",
                    width: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h2 className="text-center mb-4">Driver Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className={`form-control w-100 ${
                      nameError ? "border-red" : ""
                    }`}
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                  {nameError && (
                    <div className="text-danger mt-2">
                      Please enter a username.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control w-100 ${
                      passwordError ? "border-red" : ""
                    }`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                  {passwordError && (
                    <div className="text-danger mt-2">
                      Please enter a password.
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
              <div className="mt-2 mb-4">
                Don't have an account?{" "}
                <button className="btn btn-link p-0" onClick={handleSignupClick}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DriverLogin;
