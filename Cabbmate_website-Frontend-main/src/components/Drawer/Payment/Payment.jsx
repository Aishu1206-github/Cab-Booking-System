import React from "react";
import Method from "../../../Assets/Method.png";
import MyWallet from "../../../Assets/MyWallet.png";
import AddMoney from "../../../Assets/AddMoney.png";
import SendMoney from "../../../Assets/SendMoney.png";
import Arrow from "../../../Assets/Arrow.png";

export default function Payment() {
  return (
    <div>
      <h3 className="ps-2 pt-4 pb-3" style={{ backgroundColor: "#f0f0f0" }}>
        Payment
      </h3>
      <div
        className="d-flex flex-column gap-3 px-2 "
        style={{ height: "min-content" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Method}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Method"
            />
            <span>Payment Method</span>
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
              src={MyWallet}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="My Wallet"
            />
            <span>My Wallet</span>
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
              src={AddMoney}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Add Money"
            />
            <span>Add Money</span>
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
              src={SendMoney}
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
              alt="Send Money"
            />
            <span>Send Money</span>
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
