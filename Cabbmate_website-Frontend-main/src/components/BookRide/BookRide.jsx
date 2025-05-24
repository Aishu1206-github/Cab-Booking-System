import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./BookRide.css";
import { FaUserFriends } from "react-icons/fa";

export default function BookRide() {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(1); // State to control DatePicker visibility

  const [inputState, setInputState] = useState({
    from: { hover: false, focus: false },
    to: { hover: false, focus: false },
    date: { hover: false, focus: false },
    passenger: { hover: false, focus: false },
    search: { hover: false, focus: false },
  });

  const [isTodayHighlighted, setIsTodayHighlighted] = useState(false);

  useEffect(() => {
    const today = new Date();
    const isTodaySelected =
      selectedDate && selectedDate.toDateString() === today.toDateString();
    setIsTodayHighlighted(!isTodaySelected);
  }, [selectedDate]);

  const handleFocusOrHover = (inputName, stateName, isActive) => {
    setInputState((prevState) => ({
      ...prevState,
      [inputName]: { ...prevState[inputName], [stateName]: isActive },
    }));
  };

  const dateInputRef = useRef(null);

  const handleSpanClick = () => {
    setIsDatePickerOpen(true); // Open DatePicker when span is clicked
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
    setTimeout(() => setIsDatePickerOpen(false), 0); // Force close DatePicker after selecting a date
  };

  const [passengerCount, setPassengerCount] = useState(1);

  const increaseCount = () => {
    setPassengerCount((prevCount) => prevCount + 1);
  };

  // Function to decrease the passenger count
  const decreaseCount = () => {
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
    }
  };
  const handleSearch = async () => {
    if (!locationFrom || !locationTo || !selectedDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    const rideRequest = {
      locationFrom,
      locationTo,
      selectedDate: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
      passengerCount,
    };
  
    try {
      const response = await axios.post("http://localhost:8080/api/rides/book", rideRequest);
      alert(response.data); // Show success message
    } catch (error) {
      console.error("Error booking ride:", error);
      alert("Failed to book ride!");
    }
  };
  
  return (
    <div>
      <div className="container bg-transparent">
        <div className="row justify-content-start">
          <div className="col-12 col-md-3 mb-3">
            {/* Going From Input */}
            <span
              style={{
                backgroundColor: "#28a745",
                opacity:
                  inputState.from.hover || inputState.from.focus ? 0.9 : 1,
                transition: "opacity 0.2s",
              }}
              className="rounded-pill ps-3 d-flex align-items-center "
              onMouseEnter={() => handleFocusOrHover("from", "hover", true)}
              onMouseLeave={() => handleFocusOrHover("from", "hover", false)}
            >
              <i
                className="bi bi-geo-alt"
                style={{ fontSize: "24px", color: "#FFD700" }}
              ></i>

              <input
                type="text"
                placeholder=" Going From"
                value={locationFrom}
                onChange={(e) => setLocationFrom(e.target.value)}
                onFocus={() => handleFocusOrHover("from", "focus", true)}
                onBlur={() => handleFocusOrHover("from", "focus", false)}
                className="py-3 bg-transparent text-white"
                style={{
                  border: "none",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              />
            </span>
          </div>
          {/* Going To Input */}
          <div className="col-12 col-md-3 mb-3">
            <span
              style={{
                backgroundColor: "#28a745",
                opacity: inputState.to.hover || inputState.to.focus ? 0.9 : 1,
                transition: "opacity 0.2s",
              }}
              className="rounded-pill ps-3 d-flex align-items-center"
              onMouseEnter={() => handleFocusOrHover("to", "hover", true)}
              onMouseLeave={() => handleFocusOrHover("to", "hover", false)}
            >
              <i
                className="bi bi-geo-alt"
                style={{ fontSize: "24px", color: "#FFFFFF" }}
              ></i>
              <input
                type="text"
                placeholder=" Going To"
                value={locationTo}
                onChange={(e) => setLocationTo(e.target.value)}
                onFocus={() => handleFocusOrHover("to", "focus", true)}
                onBlur={() => handleFocusOrHover("to", "focus", false)}
                className="py-3 bg-transparent text-white"
                style={{
                  border: "none",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              />
            </span>
          </div>
          {/* Date Picker */}
          <div className="col-12 col-md-2 mb-3">
            <span
              style={{
                backgroundColor: "#28a745",
                opacity:
                  inputState.date.hover || inputState.date.focus ? 0.9 : 1,
                transition: "opacity 0.2s",
              }}
              className="rounded-pill ps-3 d-flex align-items-center"
              onMouseEnter={() => handleFocusOrHover("date", "hover", true)}
              onMouseLeave={() => handleFocusOrHover("date", "hover", false)}
              onFocus={() => handleFocusOrHover("date", "focus", true)}
              onBlur={() => handleFocusOrHover("date", "focus", false)}
              onClick={handleSpanClick}
            >
              <BsCalendar
                size={24}
                className="me-2 text-white"
                style={{ fontSize: "24px", fill: "#FFFFFF" }}
              />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date"
                className={`form-control bg-transparent border-0 custom-datepicker py-3 ${
                  isTodayHighlighted ? "highlight-today" : ""
                }`}
                ref={dateInputRef}
                onFocus={() => handleFocusOrHover("date", "focus", true)}
                onBlur={() => handleFocusOrHover("date", "focus", false)}
                style={{
                  outline: "none",
                  border: "none",
                }}
                open={isDatePickerOpen} // Control visibility with state
                onClickOutside={() => setIsDatePickerOpen(false)} // Close DatePicker on outside click
              />
            </span>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <span
              style={{
                backgroundColor: "#28a745",
                opacity:
                  inputState.passenger.hover || inputState.passenger.focus
                    ? 0.9
                    : 1,
                transition: "opacity 0.2s",
              }}
              className="rounded-pill ps-3 d-flex align-items-center"
              onMouseEnter={() =>
                handleFocusOrHover("passenger", "hover", true)
              }
              onMouseLeave={() =>
                handleFocusOrHover("passenger", "hover", false)
              }
            >
              <FaUserFriends
                size={24}
                className="me-2 text-white"
                style={{ fontSize: "24px", fill: "#FFFFFF" }}
              />
              <span className="py-3 me-3">
                {passengerCount}{" "}
                {passengerCount > 1 ? "Passengers" : "Passenger"}
              </span>
              <button
                onClick={decreaseCount}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "20px",
                }}
              >
                <FaMinus />
              </button>
              <button
                onClick={increaseCount}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "20px",
                }}
              >
                <FaPlus />
              </button>
            </span>
          </div>
          <div className="col-12 col-md-1 mb-3">
          <button
  className="rounded-pill px-3 text-white py-3 w-sm-100"
  onMouseEnter={() => handleFocusOrHover("search", "hover", true)}
  onMouseLeave={() => handleFocusOrHover("search", "hover", false)}
  onClick={handleSearch} // Trigger the handleSearch function
  style={{
    backgroundColor: "#28a745",
    opacity: inputState.search.hover || inputState.search.focus ? 0.9 : 1,
    transition: "opacity 0.2s",
    border: "none",
  }}
>
  Search
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
