import React, { useState } from "react";
import FingerPrint from "../../../../Assets/FingerPrint.png";
import ToggleOff from "../../../../Assets/ToggleOff.png";
import ToggleOn from "../../../../Assets/ToggleOn.png";
import Ibutton from "../../../../Assets/Ibutton.png";

export default function Faceid() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={FingerPrint}
          className="me-3"
          style={{ width: "20px", height: "20px" }}
          alt="FingerPrint"
        />
        <span>Enable Face ID/Touch ID</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <img
          src={isToggled ? ToggleOn : ToggleOff}
          className="cursor-pointer"
          style={{ width: "20px", height: "20px" }}
          alt="Toggle"
          onClick={handleToggleClick}
        />
        <img
          src={Ibutton}
          style={{ width: "20px", height: "20px" }}
          alt="Ibutton"
        />
      </div>
    </div>
  );
}
