import React from "react";
import "./Account.css";
import CloseButton from "../../../../Assects/CloseButton.png";
import Apple from "../../../../Assects/Apple.png";
import Arrow from "../../../../Assects/Arrow.png";
import Google from "../../../../Assects/Google.png";
import FaceBook from "../../../../Assects/FaceBook.png";
import FaceId from "../../../../Assects/FaceId.png";

export default function Account({ onClose }) {
  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div className="d-flex flex-row justify-between items-start mb-2">
        <span>Choose an account</span>
        <img
          src={CloseButton}
          onClick={onClose}
          className="text-red-500 cursor-pointer wid"
        />
      </div>
      <div className="d-flex flex-col" style={{ backgroundColor: "white" }}>
        <div
          className="d-flex flex-row justify-between pt-3 pb-2 px-2"
          style={{ borderBottom: "5px solid #f6f6f6" }}
        >
          <div className="d-flex flex-row items-center space-x-3">
            <img src={Apple} style={{ width: "5%" }} />
            <span>Apple</span>
          </div>
          <img src={Arrow} className="wid" />
        </div>
        <div
          className="d-flex flex-row justify-between pt-3 pb-2 px-2"
          style={{ borderBottom: "5px solid #f6f6f6" }}
        >
          <div className="d-flex flex-row items-center space-x-3">
            <img src={Google} style={{ width: "5%" }} />
            <span>Google</span>
          </div>
          <img src={Arrow} className="wid" />
        </div>
        <div
          className="d-flex flex-row justify-between pt-3 pb-2 px-2"
          style={{ borderBottom: "5px solid #f6f6f6" }}
        >
          <div className="d-flex flex-row items-center space-x-3">
            <img src={FaceBook} style={{ width: "5%" }} />
            <span>Facebook</span>
          </div>
          <img src={Arrow} className="wid" />
        </div>
        <div
          className="d-flex flex-row justify-between pt-3 pb-2 px-2"
          style={{ borderBottom: "5px solid #f6f6f6" }}
        >
          <div className="d-flex flex-row items-center space-x-3">
            <img src={FaceId} style={{ width: "5%" }} />
            <span>Face ID/Touch ID</span>
          </div>
          <img src={Arrow} className="wid" />
        </div>
      </div>
    </div>
  );
}
