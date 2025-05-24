import React, { useState } from 'react';
import './Step5.css';

const Step5 = ({ carDetails, setCarDetails, errors }) => {
  const handleCarDetailsChange = (e) => {
    const { name, value } = e.target;
    setCarDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="car-details-container">
      <h3>Car Details</h3>
      <div className="form-group">
        <label>Car Model</label>
        <input
          type="text"
          name="carModel"
          value={carDetails.carModel}
          onChange={handleCarDetailsChange}
          placeholder="Enter car model"
        />
        {errors.carModel && <span className="error">{errors.carModel}</span>}
      </div>

      <div className="form-group">
        <label>Car Color</label>
        <input
          type="text"
          name="carColor"
          value={carDetails.carColor}
          onChange={handleCarDetailsChange}
          placeholder="Enter car color"
        />
        {errors.carColor && <span className="error">{errors.carColor}</span>}
      </div>

      <div className="form-group">
        <label>License Plate</label>
        <input
          type="text"
          name="licensePlate"
          value={carDetails.licensePlate}
          onChange={handleCarDetailsChange}
          placeholder="Enter license plate number"
        />
        {errors.licensePlate && <span className="error">{errors.licensePlate}</span>}
      </div>
    </div>
  );
};

export default Step5;