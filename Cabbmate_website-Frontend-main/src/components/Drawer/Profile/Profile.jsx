import React from "react";
import ProfilePic from "../../../Assets/ProflePic.jpg";
import EditLogo from "../../../Assets/EditLogo.png";

export default function Profile() {
  return (
    <div
      className="d-flex align-items-center justify-content-between w-100 text-white py-2 px-3"
      style={{ backgroundColor: "#007AFF" }}
    >
      <div className="flex-grow-1 d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="ms-2">Rohit Talreja</span>
        </div>
      </div>
      <div>
        <img
          src={EditLogo}
          alt="Edit"
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    </div>
  );
}
