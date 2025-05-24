import React, { useState } from "react";
import ProfilePic from "../../../Assets/ToggleOn.png";
import "./Step2.css";

export default function Step2() {
  const [stop, setStop] = useState("");
  const handleInputChange = (e) => {
    setStop(e.target.value);
  };

  const handleClearInput = () => {
    setStop("");
  };

  return (
    <div className="">
      <div className="step2-content">
        <div className="map-container">
          <div id="map">
            <p className="map-placeholder">Map Placeholder</p>
          </div>
        </div>

        <div className="step2-card">
          <div className="left-side">
            <h2>Stop Over Points</h2>
            <p>
              Customize your journey by adding stop points along the route.
              Enter the location below to add a new stop.
            </p>
          </div>

          <div className="right-side">
            <div className="stop-point">Mondel Square, Prahlad Nagar</div>

            <div className="add-stop-container">
              <input
                type="text"
                placeholder="Add Stop"
                value={stop}
                onChange={handleInputChange}
                className="stop-input"
              />
              <button className="add-stop-btn" onClick={handleClearInput}>
                Add <span>Stop</span>
              </button>
            </div>

            <div className="stop-point">
              Science City, Bhuyang Dev, Prahlad Nagar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
