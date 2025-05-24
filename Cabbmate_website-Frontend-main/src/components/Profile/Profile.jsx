import React from "react";
import ProfilePic from "../../Assets/ProflePic.jpg";
import "./Profile.css";


export default function Profile() {
  return (
    <div>
      <div className="container-fluid bg-black text-white p-4">
        <div className="row ">
          <div className="col-12">
            <div className="text-center">
              <img src={ProfilePic} className="rounded-pill image mb-3" />
              <p className="name mb-0">Rohit Talreja</p>
              <button
                style={{
                  color: "#59dab2",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                Edit Profile <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-10 col-md-6 pb-3"
            style={{ borderBottom: "2px solid #808080 " }}
          >
            <div className="d-flex flex-row justify-content-between">
              <span className="d-flex flex-row align-items-center">
                <i className="bi bi-person icons me-3"></i>

                <span className="ms-2">
                  <p className="mb-0 fw-bold text-start sub-heading mb-0">
                    Account Verification
                  </p>
                  <p className="mb-0 text-start content">
                    Verify Your Account and update the documents
                  </p>
                </span>
              </span>

              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-10 col-md-6 pb-3"
            style={{ borderBottom: "2px solid #808080 " }}
          >
            <div className="d-flex flex-row justify-content-between">
              <span className="d-flex flex-row align-items-center">
                <i className="bi bi-building icons me-3"></i>

                <span className="ms-2">
                  <p className="mb-0 fw-bold text-start sub-heading mb-0">
                    Withdraw Methods
                  </p>
                  <p className="mb-0 text-start content">
                    Manage your transactions via bank account details
                  </p>
                </span>
              </span>

              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-10 col-md-6 pb-3"
            style={{ borderBottom: "2px solid #808080 " }}
          >
            <div className="d-flex flex-row justify-content-between">
              <span className="d-flex flex-row align-items-center">
                <i className="bi bi-truck icons me-3"></i>

                <span className="ms-2">
                  <p className="mb-0 fw-bold text-start sub-heading mb-0">
                    Vehicles
                  </p>
                  <p className="mb-0 text-start content">
                    Manage your travelling Vehicle
                  </p>
                </span>
              </span>

              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-10 col-md-6 pb-3"
            style={{ borderBottom: "2px solid #808080 " }}
          >
            <div className="d-flex flex-row justify-content-between">
              <span className="d-flex flex-row align-items-center">
                <i className="bi bi-wallet icons me-2"></i>

                <span className="ms-2">
                  <p className="mb-0 fw-bold text-start sub-heading mb-0">
                    Travel Preference
                  </p>
                  <p className="mb-0 text-start content">
                    Discover Your Ideal Travel Destination Based on Personal
                    Preference
                  </p>
                </span>
              </span>

              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-10 col-md-6 pb-3"
            style={{ borderBottom: "2px solid #808080 " }}
          >
            <div className="d-flex flex-row justify-content-between">
              <span className="d-flex flex-row align-items-center">
                <i className="bi bi-gear icons me-2"></i>

                <span className="ms-2">
                  <p className="mb-0 fw-bold text-start sub-heading mb-0">
                    Accessibility
                  </p>
                  <p className="mb-0 text-start content">
                    Discover Your Ideal Travel Destination Based on Personal
                    Preference
                  </p>
                </span>
              </span>

              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
