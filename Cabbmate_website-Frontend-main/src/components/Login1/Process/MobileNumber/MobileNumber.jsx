import React, { useState } from "react";
import Select from "react-select";
import BlueThinArrow from "../../../../Assects/BlueThinArrow.png";
import "../Process.css";
import ModalComponent from "../Account/ModalComponent";
import Account from "../Account/Account";
import "./MobileNumber.css";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../../../Assects/LeftArrow.png";
import BlueArrow from "../../../../Assects/BlueArrow.png";

const customStyles = {
  container: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  control: (provided) => ({
    ...provided,
    border: "none", // Remove all borders
    borderBottom: "1px solid #ccc", // Add bottom border
    boxShadow: "none",
    borderRadius: "0", // Remove border radius to keep it sharp
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none", // Hide the separator line
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0", // Adjust padding if needed
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided) => ({
    ...provided,
    border: "none", // Remove borders from options
  }),
};

export default function MobileNumber() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const handlecode = () => {
    navigate("/code");
  };
  return (
    <div className="flex flex-col h-screen px-3 position-relative">
      {/* Top section */}
      <img
        src={LeftArrow}
        className="rounded-full w-1/6 sm:w-1/6 h-20 self-start"
      />
      <div>
        <span className="block heading">Enter Your Mobile Number</span>
        <div className="flex flex-row mt-2 mb-3">
          <div className="w-1/4 sm:w-1/4 flex flex-row justify-content-between align-items-center me-3">
            <span>
              <span className="flag-icon flag-icon-in"> </span>+91
            </span>
            <span className="custom-caret"></span>
          </div>
          <div className="d-flex flex-col w-3/4 sm:w-3/4">
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="number"
              className="w-full border-b border-gray-300 rounded-none"
            />
          </div>
        </div>
        <button
          className="d-flex flex-row align-items-center text-indigo-500 choose mb-2"
          onClick={() => setModalIsOpen(true)}
        >
          <span className="inline-flex items-center h-full me-2">
            Or choose another login option
          </span>
          <img src={BlueThinArrow} style={{ width: "2%" }} />
        </button>
        <ModalComponent
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{ width: "20%", maxWidth: "none" }}
        >
          <Account onClose={() => setModalIsOpen(false)} />{" "}
        </ModalComponent>
        <span className="tc">
          By proceeding I accept the{" "}
          <button className="text-indigo-500">
            Terms and Conditions & Privacy Policy
          </button>
        </span>
      </div>

      {/* Bottom section with BlueArrow */}
      <img
        src={BlueArrow}
        className="rounded-full w-1/6 sm:w-1/5 h-20 position-absolute bottom-0 end-0"
        onClick={handlecode}
      />
    </div>
  );
}
