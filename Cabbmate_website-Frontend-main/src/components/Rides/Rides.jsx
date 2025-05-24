import React from "react";
import ProfilePic from "../../Assects/ProflePic.jpg";
import "./Rides.css";

export default function Rides() {
  const items = [
    {
      id: 1,
      RideNo: 1,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "$ 4.00",
    },
    {
      id: 2,
      RideNo: 1,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "$ 4.00",
    },
    {
      id: 3,
      RideNo: 1,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "$ 4.00",
    },
    {
      id: 4,
      RideNo: 1,
      Profilepic: ProfilePic,
      name: "Rohit Talreja",
      StartTime: "11:00 AM",
      StartLocation: "Pratap Nagar",
      EndTime: "11:08 AM",
      EndLocation: "Surajpole",
      Jdate: "19/06/2023",
      Rate: "$ 4.00",
    },
  ];
  return (
    <div>
      <p
        className="text-center p-0 m-0"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "100",
          backgroundColor: "#59dab2",
        }}
      >
        Rides
      </p>
      <div className="container-fluid bg-black ">
        <div className="row  py-5">
          {items.map((item) => (
            <div className="col-md-4 col-12 ">
              <div style={{ backgroundColor: "#f5f5f5" }} className="mb-3">
                <p className="font-semibold p-2">Ride No. #{item.RideNo}</p>
                <div className="d-flex flex-row align-items-center p-2">
                  <img
                    src={item.Profilepic}
                    className="rounded-circle me-2"
                    style={{ width: "10%" }}
                  />
                  <p className="p-0 m-0 color font-semibold">{item.name}</p>
                </div>
                <div className="row p-2">
                  <div className="col-1">
                    <span class="dot-icon"></span>
                  </div>
                  <div className="col-11 ps-0">
                    <div className="d-flex flex-row justify-content-between ">
                      <p className="d-flex align-items-center font-semibold p-0 m-0">
                        Start Location
                      </p>
                      <p className="color m-0">{item.StartTime}</p>
                    </div>

                    <p className="p-0 m-0 text-secondary">
                      {item.StartLocation}
                    </p>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-1">
                    <span class="dot-icon1"></span>
                  </div>
                  <div className="col-11 ps-0">
                    <div className="d-flex flex-row justify-content-between p-0">
                      <p className="d-flex align-items-center font-semibold p-0 m-0">
                        End Location
                      </p>
                      <p className="color m-0">{item.EndTime}</p>
                    </div>

                    <p className="p-0 m-0 text-secondary">{item.EndLocation}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-3">
                    <div
                      className="d-flex flex-row justify-content-between p-2"
                      style={{ borderTop: "2px solid #c0c0c0" }}
                    >
                      <p className="font-semibold">{item.Jdate}</p>
                      <p className="text-secondary position-relative">
                        <span className="color position-absolute end-0">
                          {item.Rate}
                        </span>
                        <br />
                        Per Passenger
                      </p>
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
