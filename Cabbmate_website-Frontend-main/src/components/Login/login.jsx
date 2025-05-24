import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.jpg";
import { useNavigate } from "react-router-dom";
import Signup from "../Signup/signup"; // Import the Signup component

export default function Login() {
  const navigate = useNavigate();

  // State to manage the conditional rendering of the Signup component
  const [showSignup, setShowSignup] = useState(false);

  // State for form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State for validation errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Validation logic
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required.";
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    // If there are errors, set the errors state and return early
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate("/journey");
  };

  // Function to toggle between Login and Signup
  const handleSignupClick = () => {
    setShowSignup(true); // Show the Signup component
  };

  // Function to handle validation on blur
  const handleBlur = (field) => {
    const newErrors = { ...errors };
    if (field === "username" && !username) {
      newErrors.username = "Username is required.";
    } else if (field === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!password) {
        newErrors.password = "Password is required.";
      } else if (!passwordRegex.test(password)) {
        newErrors.password =
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
      } else {
        delete newErrors.username;
        delete newErrors.password; // Clear the error if the password is valid
      }
    }
    setErrors(newErrors);
  };

  return (
    <>
      {/* Conditionally render Signup when showSignup is true */}
      {showSignup ? (
        <div className=" d-flex justify-content-center">
          <Signup />
        </div>
      ) : (
        // Display the Login form when showSignup is false
        <div className="driver-login-page">
          <div className="container-fluid d-flex justify-content-center bg-grey align-items-center mb-4 mt-10">
            <form
              className="border border-3 border-black bg-body-secondary text-black p-3 wi"
              id="formcontainer"
              onSubmit={handleSubmit}
            >
              <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" />
              </div>

              <div
                className="scrollable-section"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                <h3 className="text-center text-black">Login</h3>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control w-100 border border-1 border-warning"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => handleBlur("username")} // Validate on blur
                  />
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control w-100 border border-1 border-warning"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")} // Validate on blur
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
              </div>
              <button type="login" className="btn btn-success w-100">
                LOGIN
              </button>
              <div className="mt-2 mb-4">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={handleSignupClick}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
