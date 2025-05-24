import React from "react";

export default function TrackDriver() {
  const items = [
    {
      id: 1,
      Name: "Robert",
      Distance: "0.07 miles",
      Time: "1 min",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Sticky Header */}
      <p
        className="text-center p-0 m-0"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "100",
          backgroundColor: "#59dab2",
        }}
      >
        Track Drivers
      </p>

      {/* Main Container (fills remaining vertical space) */}
      <div className="container-fluid flex-grow-1 d-flex flex-column bg-black text-white">
        {items.map((item) => (
          <div className="row flex-grow-1 d-flex flex-column" key={item.id}>
            {/* The col-12 should take up as much vertical space as possible */}
            <div className="col-12 flex-grow-1 d-flex justify-content-center align-items-center">
              <p>put map here</p>
            </div>

            {/* Sticky Footer */}
            <div
              className="row justify-content-center"
              style={{
                position: "sticky",
                bottom: "0",
                zIndex: "100",
              }}
            >
              <div className="col-6 col-md-4">
                <p className="p-0 m-0">Driver Name:</p>
                <p>{item.Name}</p>
              </div>
              <div className="col-6 col-md-4 text-end">
                <i
                  className="bi bi-telephone color "
                  style={{ color: "#59dab2" }}
                ></i>
                <p className="p-0 m-0 mt-3">{item.Distance}</p>
                <p>{item.Time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
