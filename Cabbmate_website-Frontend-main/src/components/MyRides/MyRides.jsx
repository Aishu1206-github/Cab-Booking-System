import React from "react";
import "./MyRides.css";

const MyRides = () => {
  const rides = [
    {
      id: 1,
      date: "2024-03-20",
      from: "Downtown",
      to: "Airport",
      price: "25.00rs",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-03-18",
      from: "Mall",
      to: "University",
      price: "15.50rs",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-03-18",
      from: "Mall",
      to: "University",
      price: "15.50rs",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-03-18",
      from: "Mall",
      to: "University",
      price: "15.50rs",
      status: "Completed",
    },
  ];

  return (
    <div className="my-rides-container">
      <h1 className="my-rides-header">My Rides</h1>
      <p className="my-rides-description">Here you can see all of your rides</p>
      <div className="rides-list">
        {rides.map((ride) => (
          <div key={ride.id} className="ride-card">
            <div className="ride-header">
              <span className="date">{ride.date}</span>
              <span className={`status ${ride.status.toLowerCase()}`}>
                {ride.status}
              </span>
            </div>
            <div className="ride-details">
              <div className="location">
                <div className="from">
                  <span className="label">From:</span> {ride.from}
                </div>
                <div className="to">
                  <span className="label">To:</span> {ride.to}
                </div>
              </div>
              <div className="price">{ride.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRides;
