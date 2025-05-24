import React from "react";
import Faceid from "./FaceId/Faceid";
import ManageA from "../../../Assets/ManageA.png";
import Arrow from "../../../Assets/Arrow.png";
import Key from "../../../Assets/Key.png";
import Currency from "../../../Assets/Currency.png";
import Language from "../../../Assets/Language.png";

export default function Account() {
  return (
    <div>
      <h3 className="ps-2 pt-4 pb-3" style={{ backgroundColor: "#f0f0f0" }}>
        Account Settings
      </h3>
      <div
        className="d-flex flex-column gap-3 px-2 align-items-start"
        style={{ height: "min-content" }}
      >
        <Faceid />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={ManageA}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Manage Account"
            />
            <span>Manage Account</span>
          </div>
          <img
            src={Arrow}
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            alt="Arrow"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Key}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Change Password"
            />
            <span>Change Password</span>
          </div>
          <img
            src={Arrow}
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            alt="Arrow"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Currency}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Change Currency"
            />
            <span>Change Currency</span>
          </div>
          <img
            src={Arrow}
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            alt="Arrow"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Language}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Change Language"
            />
            <span>Change Language</span>
          </div>
          <img
            src={Arrow}
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  );
}
