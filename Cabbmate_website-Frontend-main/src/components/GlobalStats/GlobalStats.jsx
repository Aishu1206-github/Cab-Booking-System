import React from 'react';
import './GlobalStats.css'; // You can define the CSS in this file

import { FaBuilding, FaArrowUpRightDots, FaBolt } from "react-icons/fa6";

const GlobalStats = () => {
  return (
    <div className="page-container">
    <div className="global-stats-container">
      <h1 className="global-stats-title">Global mobility ecosystem driving communities forward</h1>
      <div className="stats">
        <div className="stat-item">
        <div className="stat-icon">
        <FaBuilding className="fa-icon"/>
        </div>
          <h3>250+</h3>
          <p>Cities covered</p>
          <small>Across India, Australia, New Zealand and the UK</small>
        </div>
        <div className="stat-item">
        <div className="stat-icon">
        <FaArrowUpRightDots className="fa-icon"/>
        </div>
          <h3>55 Cr+</h3>
          <p>Yearly rides</p>
          <small>Booked by our customers every year</small>
        </div>
        <div className="stat-item">
        <div className="stat-icon">
        <FaBolt className="fa-icon"/>
        </div>
          <h3>12 Cr+</h3>
          <p>Kilometers on S1</p>
          <small>Distance covered on Ola S1 scooters within a year of launch</small>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GlobalStats;
