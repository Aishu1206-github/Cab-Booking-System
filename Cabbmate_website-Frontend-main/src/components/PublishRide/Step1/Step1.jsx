import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "./Step1.css";

export default function Step1({ onValidationChange }) {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [touched, setTouched] = useState({ leavingFrom: false, goingTo: false });
  const [carType, setCarType] = useState("");

  const handleLeavingFromChange = (event) => {
    setLeavingFrom(event.target.value);
  };

  const handleGoingToChange = (event) => {
    setGoingTo(event.target.value);
  };

  const handleSwap = () => {
    setLeavingFrom(goingTo);
    setGoingTo(leavingFrom);
  };

  const handleLeavingFromBlur = () => {
    setTouched(prev => ({ ...prev, leavingFrom: true }));
  };

  const handleGoingToBlur = () => {
    setTouched(prev => ({ ...prev, goingTo: true }));
  };

  useEffect(() => {
    const isValid = leavingFrom.trim() !== "" && goingTo.trim() !== "";
    onValidationChange(isValid); // Notify parent about validation status
  }, [leavingFrom, goingTo]); // No need to include onValidationChange in dependencies

  return (
    <div className="step1-card">
      <div className="step1-card-content">
        <div className="input-container">
          <input
            type="text"
            className="form-control custom-input p-4"
            style={{ 
              backgroundColor: "#231f16",
              borderColor: touched.leavingFrom && !leavingFrom.trim() ? 'red' : ''
            }}
            placeholder="Leaving from"
            value={leavingFrom}
            onChange={handleLeavingFromChange}
            onBlur={handleLeavingFromBlur}
          />

          <div className="d-flex justify-content-center mt-3">
            <FaExchangeAlt
              size={24}
              onClick={handleSwap}
              className="swap-icon"
              title="Swap locations"
            />
          </div>

          <input
            type="text"
            className="form-control custom-input p-4"
            style={{ 
              backgroundColor: "#231f16",
              borderColor: touched.goingTo && !goingTo.trim() ? 'red' : ''
            }}
            placeholder="Going to"
            value={goingTo}
            onChange={handleGoingToChange}
            onBlur={handleGoingToBlur}
          />
        </div>
      </div>
      <div className="map-container">
        <div id="map">
          <p className="map-placeholder">Map Placeholder</p>
        </div>
      </div>
    </div>
  );
}