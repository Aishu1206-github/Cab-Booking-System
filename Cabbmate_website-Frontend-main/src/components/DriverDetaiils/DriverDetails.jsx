import React, { useState, useEffect } from "react";
import "./DriverDetails.css";

const DriverDetails = ({ onValidationChange }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isCodeDisbaled, setIsCodeDisabled] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setModel] = useState("");
  const [selectedYear, setYear] = useState("");
  const [selectedColor, setColor] = useState("");
  const [driverName, setDriverName] = useState(""); // State for driver name
  const [driverNumber, setDriverNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");

  const countryCodes = ["+91"];

  const handleCountryCodeChange = (e) => {
    const newCode = e.target.value;
    setSelectedCountryCode(newCode);

    if (newCode === "+91") {
      setIsCodeDisabled(false);
    } else {
      setIsCodeDisabled(true);
    }
  };
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
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
    const isValid =
      driverName.trim() !== "" &&
      driverNumber.trim() !== "" &&
      selectedBrand !== "" &&
      selectedModel !== "" &&
      selectedColor !== "" &&
      selectedYear !== "";
    onValidationChange(isValid); // Notify parent about validation status
  }, [
    driverName,
    driverNumber,
    selectedBrand,
    selectedModel,
    selectedColor,
    selectedYear,
  ]);

  return (
    <>
      <div className="driver_title">
        <h2 className="text-center text-2xl font-bold text-white my-3">
          Enter Driver's details
        </h2>
        <h5 className="text-center text-white my-2 mb-5">
          Please provide the necessary details. ( Note:{" "}
          <span style={{ color: "red" }}>*</span> denotes mandatory field )
        </h5>
      </div>
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
                <select name="" id="countryCode">
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  {countryCodes.map((code, index) => (
                    <option
                      key={index}
                      value={code}
                      disabled={isCodeDisbaled && selectedCountryCode !== code}
                    >
                      {code}
                    </option>
                  ))}
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
                  <option value="">+91</option>
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
        <div className="car_details">
          <h2>Car Details</h2>
          <form action="" className="driver_form">
            <div className="input_box">
              <label htmlFor="">
                Make / Brand Name <span>*</span>
              </label>
              <select
                className="form-control custom-select text-white"
                style={{ backgroundColor: "#231f16" }}
                placeholder="Enter Brand name"
                onChange={handleBrandChange}
              >
                <option value="">Select Brand</option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="">
                Model <span>*</span>
              </label>
              <select
                className="form-control custom-select text-white"
                style={{ backgroundColor: "#231f16" }}
                placeholder="Enter Brand name"
                onChange={handleModelChange}
              >
                <option value="">Select Modal</option>
                <option value="brand1">2001</option>
                <option value="brand2">2002</option>
                <option value="brand3">2003</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="">
                Car's Number Plate <span>*</span>
              </label>
              <input type="text" placeholder="Enter Car Number" />
            </div>
            <div className="input_box">
              <label htmlFor="">
                Car's Color <span>*</span>
              </label>
              <select
                className="form-control custom-select text-white"
                style={{ backgroundColor: "#231f16" }}
                placeholder="Enter Brand name"
                onChange={handleColorChange}
              >
                <option value="">Select Color</option>
                <option value="brand1">Red</option>
                <option value="brand2">Green</option>
                <option value="brand3">blu</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="">
                When was your Car Registered <span>*</span>
              </label>
              <select
                className="form-control custom-select text-white"
                style={{ backgroundColor: "#231f16" }}
                placeholder="Enter Brand name"
                onChange={handleYearChange}
              >
                <option value="">Year</option>
                <option value="brand1">2001</option>
                <option value="brand2">2002</option>
                <option value="brand3">2003</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DriverDetails;
