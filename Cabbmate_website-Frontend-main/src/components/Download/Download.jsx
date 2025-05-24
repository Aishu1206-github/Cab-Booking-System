import React from "react";
import Google from "../../Assets/Google.jpeg";
import Apple from "../../Assets/Apple.png";
import download from "../../Assets/download.png";
import "./Download.css";

export default function Download() {
  return (
    <div className="download-section">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-5 text-white download-content mb-4 mb-md-0">
            <p className="highlight-text">GET OUR APP</p>
            <h1 className="main-heading">
              Download <span className="download">Cabbmate</span> App For Free
            </h1>
            <p className="description">
              Experience seamless cab bookings with our app. Join thousands who
              enjoy the best rides with the ease of a click.
            </p>

            <div className="button-group">
              <button
                className="glass-button"
                onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.customer.cabbmate";
                }}
              >
                <img src={Google} alt="Google Play" className="app-icon" />
                <div className="button-text">
                  <small>Get it on </small>
                  <strong>Google Play</strong>
                </div>
              </button>

              <button
                className="glass-button"
                onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.customer.cabbmate";
                }}
              >
                <img src={Apple} alt="Apple Store" className="app-icon" />
                <div className="button-text">
                  <small>Get it on </small>
                  <strong>Apple Store</strong>
                </div>
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              src={download}
              alt="Booking App Preview"
              className="booking-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
