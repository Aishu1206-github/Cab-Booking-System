import React from "react";
import "./ModalComponent.css"; // Add custom styling for modal

const ModalComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white text-black">
        <p>
          <i
            class="bi bi-check text-white rounded-circle"
            style={{ fontSize: "44px", backgroundColor: "#59dab2" }}
          ></i>
        </p>
        <h2>Ride Posted Successfully</h2>
        <p>
          You will be notified once a booking request is recieved from
          passenger. you can approve/decline the booking request from my Rides
          Ride Details Section
        </p>
        <p class="d-flex justify-content-between">
          <button
            class="flex-fill me-2"
            onClick={onClose}
            style={{ backgroundColor: "transparent" }}
          >
            OK
          </button>
          <button
            class=" flex-fill"
            onClick={onClose}
            style={{ backgroundColor: "#59dab2" }}
          >
            View My Rides
          </button>
        </p>

        <button onClick={onClose} className="close-btn">
          Return Ride
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
