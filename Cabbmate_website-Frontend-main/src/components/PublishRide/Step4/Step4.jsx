import React from "react";
import ProfilePic from "../../../Assets/ToggleOn.png";
import "./Step4.css"; // Ensure you have this CSS file

export default function Step4() {
  return (
    <div className="step4-wrapper">
      <div className="step4-content">
        <div className="step4-fixed bg-light-gray">ok</div>
        <div className="step4-image-container bg-dark">
          <img src={ProfilePic} alt="Profile" className="responsive-img" />
        </div>
      </div>
    </div>
  );
}
