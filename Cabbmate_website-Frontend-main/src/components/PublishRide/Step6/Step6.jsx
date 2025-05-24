import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "./Step6.css";

export default function Step5() {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [carType, setCarType] = useState("");

  const items = [
    {
      id: 1,
      RideNo: 1,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "$ 4.00",
      Company: "Nissan",
      CarColor: "Versa - Black",
      NumberPlate: "RJ27RJ0027",
      DriverName: "Robert",
      DriverMobile: "+9192",
      Price: "$ 4.00",
      Passengers: 1,
    },
  ];

  return (
    <>
      <div className="step-wrapper">
        <div className="step-content">
        <div className="driver-title">
        <h2 className="title">Route Details</h2>
        <p className="subtitle">The Details of Your Booked Route</p>
      </div>
          <div className="route-box">
            {items.map((item) => (
              <div key={item.id} className="route-details">
                <div className="route-section">
                  <div className="label">Start Location</div>
                  <div className="value">{item.StartLocation}</div>
                  <div className="time">{item.StartTime}</div>
                </div>
                <div className="route-section">
                  <div className="label">End Location</div>
                  <div className="value">{item.EndLocation}</div>
                  <div className="time">{item.EndTime}</div>
                </div>
                <div className="route-info">
                  <span>Driver: {item.DriverName}</span>
                  <span>Car: {item.Company} ({item.CarColor})</span>
                  <span>Passengers: {item.Passengers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
