import React, { useState } from 'react';
import './BookYourRide.css'; 

const BookYourRide = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabType, setCabType] = useState('All type'); 
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [driverAge, setDriverAge] = useState('Any age'); 
  const [cabModel, setCabModel] = useState('All model'); 

  return (
    <div className="book-your-ride">
      <h2>Book Your Ride</h2>
      <div className="input-field">
        <label htmlFor="pick-up-location">Pick Up Location</label>
        <input type="text" id="pick-up-location" value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="drop-off-location">Drop Off Location</label>
        <input type="text" id="drop-off-location" value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="passengers">Passengers</label>
        <input type="number" id="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="cab-type">Cab Type</label>
        <select id="cab-type" value={cabType} onChange={(e) => setCabType(e.target.value)}>
          <option value="All type">All type</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="pick-up-date">Pick Up Date</label>
        <input type="date" id="pick-up-date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="pick-up-time">Pick Up Time</label>
        <input type="time" id="pick-up-time" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="driver-age">Driver Age</label>
        <select id="driver-age" value={driverAge} onChange={(e) => setDriverAge(e.target.value)}>
          <option value="Any age">Any age</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="cab-model">Cab Model</label>
        <select id="cab-model" value={cabModel} onChange={(e) => setCabModel(e.target.value)}>
          <option value="All model">All model</option>
          <option value="M5 2022">M5 2022</option>
          <option value="Q7 2021">Q7 2021</option>
        </select>
      </div>
      <button className="book-button">BOOK TAXI →</button>
    </div>
  );
};

export default BookYourRide;