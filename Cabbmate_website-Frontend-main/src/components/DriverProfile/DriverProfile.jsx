import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DriverProfile.css';

const DriverProfile = ({ username, licenseNumber, carType, vehicleRegistrationNumber, profilePhoto, LOGO }) => {
  return (
    <div className="fullscreen-background">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-1">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={LOGO} alt="Cabmate logo" className="logo mr-2" />
          <span className="navbar-text brand-text">CABBMATE</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link nav-item-text" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-item-text"
                href="#"
                id="driverDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Driver
              </a>
              <div className="dropdown-menu" aria-labelledby="driverDropdown">
                <a className="dropdown-item" href="#">Login as Driver</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-item-text"
                href="#"
                id="passengerDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Passenger
              </a>
              <div className="dropdown-menu" aria-labelledby="passengerDropdown">
                <a className="dropdown-item" href="#">Login as Passenger</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile Container below Navbar */}
      <div className="container profile-container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="details-section mt-4">
              <div className="detail-item mb-3">
                <strong>Username:</strong> <span className="value">{username}</span>
              </div>
              <div className="detail-item mb-3">
                <strong>Licence No.:</strong> <span className="value">{licenseNumber}</span>
              </div>
              <div className="detail-item mb-3">
                <strong>Car Type:</strong> <span className="value">{carType}</span>
              </div>
              <div className="detail-item mb-3">
                <strong>Vehicle Registration No.:</strong> <span className="value">{vehicleRegistrationNumber}</span>
              </div>
            </div>

            {/* Profile Picture and Edit Button */}
            <div className="profile-picture-section text-center mt-4">
              <img src={profilePhoto} alt="Driver profile" className="profile-picture img-fluid" />
              <button className="btn btn-edit-profile mt-3">Edit Profile</button>
              <a href="/list-vehicle" className="list-vehicle-link">
                Earn on the go: list your vehicle for rent and watch the money roll in.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
