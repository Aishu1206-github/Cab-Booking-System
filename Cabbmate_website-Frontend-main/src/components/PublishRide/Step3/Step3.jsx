import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import "./Step3.css";

export default function Step3({ onValidationChange }) {
  const [isFormValid, setIsFormValid] = useState(false);

  const items = [
    {
      id: 1,
      PriceRange: "$12.24 - $ 18.37",
    },
  ];
  const [value, setValue] = useState(new Date());
  const [passengers, setPassengers] = useState(1); // Default value set to 1

  const handlePassengerChange = (e) => {
    setPassengers(e.target.value);
  };

  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    const isValid = value && passengers > 0 && price > 0;
    onValidationChange(isValid);
  }, [value, passengers, price, onValidationChange]);

  return (
    <div className="step-3 bg-[#231f16]" style={{ height: "100vh" }}>
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="ride text-center">Ride Information</p>
            <p className="ride_para text-center">
              Get ready to hit the road with all the essential ride
              details—destination, schedule, and everything in between—right at
              your fingertips!
            </p>
            <label htmlFor="datetime-picker" className="form-label">
              Date & Time
            </label>
            <div className="input-group mb-3">
              <DateTimePicker
                id="datetime-picker"
                onChange={setValue}
                value={value}
                className="forms-control"
                format="y-MM-dd h:mm a"
                calendarIcon={<i className="bi bi-calendar text-white"></i>}
                clearIcon={<i className="bi bi-x-circle text-white"></i>}
              />
            </div>
            <label htmlFor="passenger-select" className="form-label">
              Number of Passengers
            </label>
            <select
              id="passenger-select"
              className="forms-select mb-3"
              value={passengers}
              onChange={handlePassengerChange}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} {num === 0 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
            <label htmlFor="price-input" className="form-label">
              Price per Seat
            </label>
            <div className="input-group mb-2">
              <input
                type="number"
                id="price-input"
                className="forms-control"
                value={price}
                onChange={handlePriceChange}
                placeholder="Enter price"
                min="0"
              />
            </div>
            {items.map((item) => (
              <p className="recom-price text-center mt-4">
                Recommended Price: {item.PriceRange}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
