import React from "react";
import ProfilePic from "../../Assets/ProflePic.jpg";
import "../Rides/Rides.css";
import "font-awesome/css/font-awesome.min.css";
import "./Fetched-rides.css";
import BookRide from "../BookRide/BookRide";
import Currency from "../../Assets/Currency.png";

export default function Myrides() {
  const items = [
    {
      id: 1,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "200 ",
      Duration: "6 Hour 60 Min ",
      DriverName: "Pxyz",
    },
    {
      id: 2,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "200 ",
      Duration: "6 Hour 60 Min ",
      DriverName: "Pxyz",
    },
  ];
  return (
    <div>
      <div className="container bg-black my-0 text-white">
        <div className="row  py-5  justify-content-center">
          {items.map((item) => (
            <div className="col-12 col-xl-6 py-2 justify-content-cente">
              <div
                style={{ border: "2px solid white" }}
                className="p-2 rounded w-100"
              >
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-4">
                    <p className="p-0 m-0 text-center">
                      <i
                        className="bi bi-geo-alt"
                        style={{ fontSize: "24px", color: "#FFFFFF" }}
                      ></i>
                      {item.StartLocation}
                    </p>
                    <p className="color m-0 text-center">{item.StartTime}</p>
                  </div>
                  <i
                    className="bi bi-caret-down-fill ms-2 d-xl-none d-block text-center"
                    style={{ fontSize: "16px" }}
                  ></i>
                  <div className="col-12 col-xl-4 text-center">
                    <i class="fas fa-clock"></i> {item.Duration}
                  </div>
                  <i
                    className="bi bi-caret-down-fill ms-2 d-xl-none d-block text-center"
                    style={{ fontSize: "16px" }}
                  ></i>
                  <div className="col-12 col-md-4 text-center">
                    <p className="p-0 m-0 ">
                      {" "}
                      <i
                        className="bi bi-geo-alt"
                        style={{ fontSize: "24px", color: "#FFFFFF" }}
                      ></i>
                      {item.EndLocation}
                    </p>
                    <p className="color m-0">{item.EndTime}</p>
                  </div>

                  <div className="row m-0 p-0">
                    <div className="col-12 pt-3 m-0">
                      <div
                        className="d-flex flex-row  py-2"
                        style={{ borderTop: "2px solid #c0c0c0" }}
                      >
                        <p className="me-3 p-0 m-0">
                          <img
                            src={Currency}
                            className="Driver_image rounded-circle me-2"
                          />
                          <span className=" ">{item.Rate} </span>
                        </p>

                        <p className=" p-0 m-0">
                          <img
                            src={ProfilePic}
                            className="Driver_image rounded-circle me-2"
                          />
                          <span className=" ">{item.DriverName} </span>
                        </p>
                        <button
                          className="rounded-pill px-2 text-white ms-auto pb-1"
                          style={{
                            backgroundColor: "#28a745",

                            border: "none",
                          }}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
