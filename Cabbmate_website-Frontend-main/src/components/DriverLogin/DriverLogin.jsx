import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./DriverLogin.css"; // Your custom CSS
import Logo from "../../Assets/Logo.jpg";
import SignupDriver from "../SignupDriver/SignupDriver"; // Import the SignupDriver component
import "../Login/login.css";

function DriverLogin() {
  // State to manage whether to show DriverLogin or SignupDriver
  const [showSignup, setShowSignup] = useState(false);
  // Define formData state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // Define errors and touched state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const handleSignupClick = () => setShowSignup(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    // Trigger validation for the field
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "username":
        if (!value) error = "Username is required.";
        break;
      case "password":
        if (!value) {
          error = "Password is required.";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        ) {
          error =
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
 
//this is for Backend..
const handleSubmit = async (e) => {
  e.preventDefault();

  let validationErrors = {};
  Object.keys(formData).forEach((field) => {
    validateField(field, formData[field]);
    if (errors[field]) {
      validationErrors[field] = errors[field];
    }
  });

  // Update the errors state after validating all fields
  setErrors((prevErrors) => ({
    ...prevErrors,
    ...validationErrors,
  }));


  
  if (Object.keys(validationErrors).length === 0) {
    try {
      // Send login request with username and password
      const response = await axios.post("http://localhost:8080/api/drivers/login", formData);
      
      // Response contains driver details
      console.log("Driver data retrieved successfully:", response.data);
      alert(`Welcome, ${response.data}!`);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid username or password.");
    }
  }
};


  return (
    <>
      {/* Conditionally render SignupDriver when showSignup is true */}
      {showSignup ? (
        <div>
          <SignupDriver className="wi" />
        </div>
      ) : (
        /* If showSignup is false, display the driver login page */
        <div className="d-flex justify-content-center">
          <div className="driver-login-page wi">
            <div className="container">
              <div className="driver-login-container card p-4 shadow-sm bg-light ">
                <div className="logo-container">
                  <img className="logo" src={Logo} alt="Logo" />
                </div>

                <h2 className="text-center mb-4">Driver Login</h2>
                <form onSubmit={handleSubmit}>
                  <div
                    className="scrollable-section"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  ></div>
                  <div className="mb-3">
                    {["username", "password"].map((field, index) => (
                      <div className="mb-3" key={index}>
                        <label htmlFor={field} className="form-label">
                          {field
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </label>
                        <input
                          type={
                            field.includes("password") ? "password" : "text"
                          }
                          name={field}
                          className={`form-control border ${
                            touched[field] && errors[field]
                              ? "border-danger"
                              : "border-warning"
                          }`}
                          value={formData[field]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched[field] && errors[field] && (
                          <p style={{ color: "red", fontSize: "0.875rem" }}>
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DriverLogin;
