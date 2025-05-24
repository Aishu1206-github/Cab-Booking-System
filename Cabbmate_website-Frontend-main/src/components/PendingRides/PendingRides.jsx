import React from 'react'
import './PendingRides.css'

const PendingRides = () => {
  const pendingRides = [
    {
      id: 1,
      passengerName: "John Doe",
      pickup: "Central Station",
      dropoff: "Airport Terminal 1",
      date: "2024-03-20",
      time: "14:30",
      fare: "₹350"
    },
    {
        id: 2,
        passengerName: "Jane Smith",
        pickup: "Central Station",
        dropoff: "Airport Terminal 1",
        date: "2024-03-20",
        time: "14:30",
        fare: "₹350"
    },
    {
        id: 3,
        passengerName: "Jane Smith",
        pickup: "Central Station",
        dropoff: "Airport Terminal 1",
        date: "2024-03-20",
        time: "14:30",
        fare: "₹350"
    }
  ]

  return (
    <div className='pending-rides-container'>
      <h1 className='pending-rides-header'>Pending Rides</h1>
      <p className='pending-rides-description'>
        These are the rides that are pending for your approval.
      </p>
      <div className='pending-rides-grid'>
        {pendingRides.map(ride => (
          <div key={ride.id} className='pending-ride-card'>
            <div className='ride-info-header'>
              <h3>{ride.passengerName}</h3>
              <span className='ride-fare'>{ride.fare}</span>
            </div>
            <div className='ride-details'>
              <div className='location-info'>
                <div className='pickup'>
                  <span className='label'>Pickup:</span>
                  <span>{ride.pickup}</span>
                </div>
                <div className='dropoff'>
                  <span className='label'>Dropoff:</span>
                  <span>{ride.dropoff}</span>
                </div>
              </div>
              <div className='time-info'>
                <span className='label'>Date: <span className='value'>{ride.date}</span></span>
                <span className='label'>Time: <span className='value'>{ride.time}</span></span>
              </div>
            </div>
            <div className='action-buttons'>
              <button className='accept-btn'>Accept</button>
              <button className='decline-btn'>Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PendingRides