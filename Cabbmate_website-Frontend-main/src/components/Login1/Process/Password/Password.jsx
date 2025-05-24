import React, { useState } from "react";
import "../Process.css";
import LeftArrow from "../../../../Assects/LeftArrow.png";
import BlueArrow from "../../../../Assects/BlueArrow.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value); // Allow all characters (including alphabetic)
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const navigate = useNavigate();
  const handlecode = () => {
    navigate("/code");
  };

  return (
    <div className="flex flex-col h-screen px-3 position-relative">
      <img
        src={LeftArrow}
        className="rounded-full w-1/6 sm:w-1/6 h-20 self-start mb-3"
        onClick={handlecode}
      />
      <div className="d-flex flex-col position-relative">
        <span className="heading mb-2">What's The Password</span>
        <div className="position-relative mb-2">
          <input
            type={passwordVisible ? "text" : "password"} // Toggle input type
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
            style={{
              borderBottom: "2px solid #d3d3d3",
            }}
            className="w-100"
          />
          <span
            className="position-absolute top-50 end-0 translate-middle-y me-2"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
            {/* Corrected icon */}
          </span>
        </div>
        <span className="text-indigo-500">
          <button>Forgot Your Password?</button>
        </span>
      </div>
      <img
        src={BlueArrow}
        className="rounded-full w-1/6 sm:w-1/5 h-20 position-absolute bottom-0 end-0"
      />
    </div>
  );
}
