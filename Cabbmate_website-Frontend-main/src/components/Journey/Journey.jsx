import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import Dropdown from "react-dropdown"; // Importing React Dropdown
import "react-dropdown/style.css"; // Importing React Dropdown CSS
import Logo from "../../Assets/Logo.jpg";
import "../homepage/homepage.css";
import "./Journey.css";

export default function Journey() {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
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

  const handleCarTypeChange = (option) => {
    setCarType(option.value);
  };

  const carOptions = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "hatchback", label: "Hatchback" },
    { value: "minivan", label: "Minivan" },
    { value: "luxury", label: "Luxury" },
  ];

  return (
    <div>
      <div className="container-fluid bg-black text-white pb-3">
        <div className="row mb-4 mt-2">
          <div className="col-12 d-flex flex-row justify-content-between">
            <a
              className="navbar-brand d-flex align-items-center ms-3 hidden-overflow"
              href="#"
            >
              <img
                src={Logo}
                alt="Taxica Logo"
                width="50"
                height="40"
                className="me-2"
              />
              <span className="">CABBMATE</span>
            </a>
            <p>Username</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 d-flex flex-column align-items-center">
            <input
              type="text"
              className="form-control mb-3 bg-black text-white custom-placeholder"
              placeholder="Leaving from"
              value={leavingFrom}
              onChange={handleLeavingFromChange}
            />
            <FaExchangeAlt
              size={24}
              onClick={handleSwap}
              style={{
                cursor: "pointer",
                marginBottom: "16px",
                transform: "rotate(90deg)", // Rotate the icon by 90 degrees
              }}
              title="Swap locations"
            />
            <input
              type="text"
              className="form-control mb-3 bg-black text-white custom-placeholder"
              placeholder="Going to"
              value={goingTo}
              onChange={handleGoingToChange}
            />

            {/* React Dropdown for selecting car type */}
            <Dropdown
              options={carOptions}
              onChange={handleCarTypeChange}
              value={carType}
              placeholder="Select Car Type"
              className="w-100 react-dropdown-select"
              controlClassName="react-dropdown-placeholder" // Apply custom styles
            />
            <button
              style={{ backgroundColor: "#59dab2", border: "none" }}
              className="rounded-pill p-2 mt-4"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
