import React from "react";

export default function BookingSummary() {
  const items = [
    {
      id: 1,
      Price: "$ 4.00",
      Passengers: 1,
      Dat: "Tue, 19th Sep at 11:00 AM",
      Fee: "$ 0.20",
      Seats: "1 Seat",
      Total: "$ 4.20",
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
        Booking Summary
      </p>
      <div className="container-fluid bg-black text-white">
        <div className="row justify-content-center">
          {items.map((item) => (
            <div>
              <div className="col-12 ">
                <p>Ride Date: {item.Dat}</p>
              </div>
              <div
                className="col-12 p-3"
                style={{ backgroundColor: "#59dab2" }}
              >
                <p className="d-flex justify-content-between bg-white text-black m-0 p-2 mb-2">
                  <span>
                    {item.Seats}X{item.Price}
                  </span>
                  <span>{item.Price}</span>
                </p>
                <p className="d-flex justify-content-between bg-white text-black m-0 p-2">
                  <span>Booking Fees</span>
                  <span>{item.Fee}</span>
                </p>
              </div>
              <div className="col-12">
                {" "}
                <div
                  className="row justify-content-center bg-black"
                  style={{
                    position: "sticky",
                    bottom: "0",

                    zIndex: "100",
                  }}
                >
                  <div className="col-6 text-white">
                    <p className="p-0 m-0">Total Price</p>
                    <p>for {item.Passengers} passenger</p>
                  </div>
                  <div className="col-6 text-white d-flex justify-content-end">
                    {item.Price}
                  </div>
                  <div className="col-6 text-white d-flex justify-content-center">
                    <button
                      style={{ backgroundColor: "#59dab2" }}
                      className="px-3 py-md-3 py-1 rounded-pill w-100"
                    >
                      Continue
                    </button>
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
