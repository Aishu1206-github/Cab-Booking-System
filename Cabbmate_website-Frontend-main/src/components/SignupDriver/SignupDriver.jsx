import React, { useState } from "react";
//import Login from "../Login/login";
import axios from "axios";
import DriverLogin from "../DriverLogin/DriverLogin";
import logo from "../../Assets/Logo.jpg";
import "../Login/login.css";

export default function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    contactNo: "",
    emailId: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleLoginClick = () => setShowLogin(true);

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
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match.";
        break;
      case "contactNo":
        if (!value) {
          error = "Contact number is required.";
        } else if (!/^\d+$/.test(value)) {
          error = "Contact number must be numeric.";
        } else if (value.length !== 10) {
          error = "Contact number must be exactly 10 digits.";
        }
        break;
      case "emailId":
        if (!value) {
          error = "Email ID is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  let validationErrors = {};
  Object.keys(formData).forEach((field) => {
    validateField(field, formData[field]);
    if (errors[field]) {
      validationErrors[field] = errors[field];
    }
  });

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await axios.post("http://localhost:8080/api/signup/dSignup", formData);
      alert(response.data); // Show success message
      


      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        contactNo: "",
        emailId: "",
      });
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Failed to signup! " + (error.response?.data || error.message));
    }
  }
};

  return (
    <>
      {showLogin ? (
        <DriverLogin />
      ) : (
        <div className="driver-login-page ">
          <div className="container-fluid d-flex justify-content-center bg-grey align-items-center my-4">
            <form
              className="border border-3 border-black bg-body-secondary text-black p-3 wi"
              id="formcontainer"
              onSubmit={handleSubmit}
            >
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
                  src={logo}
                  alt="Logo"
                  style={{
                    height: "50px",
                    width: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h3 className="text-center text-black">Signup</h3>

              <div
                className="scrollable-section"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {[
                  "username",
                  "password",
                  "confirmPassword",
                  "contactNo",
                  "emailId",
                ].map((field, index) => (
                  <div className="mb-3" key={index}>
                    <label htmlFor={field} className="form-label">
                      {field
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </label>
                    <input
                      type={field.includes("password") ? "password" : "text"}
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

              <button type="submit" className="btn btn-success w-100">
                Signup
              </button>
              <div className="mt-2 mb-4">
                Already have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
