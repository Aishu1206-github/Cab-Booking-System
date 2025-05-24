import React, { useState, useEffect } from "react";
import "../../DriverDetaiils/DriverDetails.css";

export default function Dd1({ onValidationChange }) {
  const [driverName, setDriverName] = useState(""); // State for driver name
  const [driverNumber, setDriverNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");
  const handleDriverNameChange = (e) => {
    setDriverName(e.target.value); // Update state on input change
  };
  const handleDriverNumberChange = (e) => {
    const value = e.target.value;

    // Ensure only numeric input is allowed
    if (!isNaN(value)) {
      setDriverNumber(value);
    }
  };
  const handleAltNumberChange = (e) => {
    const value = e.target.value;

    // Ensure only numeric input is allowed
    if (!isNaN(value)) {
      setAltNumber(value);
    }
  };
  useEffect(() => {
    const isValid = driverName.trim() !== "" && driverNumber.trim() !== ""; // Ensure both fields are filled out

    onValidationChange(isValid); // Notify parent about validation status
  }, [driverName, driverNumber]);

  return (
    <div className="text-white">
      {" "}
      <div className="driver">
        <div className="driver_details">
          <h2>Driver Details</h2>
          <form action="" className="driver_form">
            <div className="input_box">
              <label htmlFor="">
                Driver's Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Driver name"
                onChange={handleDriverNameChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="countryCode">
                Driver's Contact No. <span>*</span>
              </label>
              <div className="number">
                <select name="" id="">
                  <option value="">+1</option>
                  <option value="">+91</option>
                  <option value="">+880</option>
                </select>
                <input
                  type="number"
                  placeholder="Enter Driver number"
                  onChange={handleDriverNumberChange}
                />
              </div>
            </div>
            <div className="input_box">
              <label for="driver_name">Alternative Contact No.</label>
              <div className="number">
                <select name="" id="">
                  <option value="">+1</option>
                  <option value="">+91</option>
                  <option value="">+880</option>
                </select>
                <input
                  type="number"
                  placeholder="Enter Alternative number"
                  onChange={handleAltNumberChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
