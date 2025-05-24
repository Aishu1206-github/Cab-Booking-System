import React, { useState } from "react";
import "../Process.css";
import LeftArrow from "../../../../Assects/LeftArrow.png";
import BlueArrow from "../../../../Assects/BlueArrow.png";
import { useNavigate } from "react-router-dom";

export default function Code() {
  const navigate = useNavigate();
  const handlepassward = () => {
    navigate("/passward");
  };
  const handlemobile = () => {
    navigate("/mobile");
  };
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };
  return (
    <div className="flex flex-col h-screen px-3 position-relative">
      <img
        src={LeftArrow}
        className="rounded-full w-1/6 sm:w-1/6 h-20 self-start mb-3"
        onClick={handlemobile}
      />
      <div className="d-flex flex-col">
        <span className="heading">What's The Code</span>
        <span className="mb-2">Enter the code sent to +12345678</span>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
          className="custom-placeholder mb-2"
          style={{
            border: "3px solid #d3d3d3",
            textAlign: "center", // Center-align the text inside the input
          }}
        />

        <span className="text-indigo-500">
          <button>retry</button>
        </span>
      </div>
      <img
        src={BlueArrow}
        className="rounded-full w-1/6 sm:w-1/5 h-20 position-absolute bottom-0 end-0"
        onClick={handlepassward}
      />
    </div>
  );
}
