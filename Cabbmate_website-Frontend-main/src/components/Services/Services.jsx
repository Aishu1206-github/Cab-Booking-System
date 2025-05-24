import React from "react";
import "./Services.css";
import t1 from "../../Assets/t1.jpeg";
import Taxi from "../../Assets/Taxi_Icon.png";
import Black_Arrow from "../../Assets/Black_Arrow.png";

export default function Services() {
  const items = [
    {
      id: 1,
      MainimgSrc: t1,
      IconimgSrc: Taxi,
      heading: "Online Booking",
      content:
        "We are many variations of passages available but the majority have suffered alternation in some form by injected humour words believable",
    },
    {
      id: 2,
      MainimgSrc: t1,
      IconimgSrc: Taxi,
      heading: "Online Booking",
      content:
        "We are many variations of passages available but the majority have suffered alternation in some form by injected humour words believable",
    },
    {
      id: 3,
      MainimgSrc: t1,
      IconimgSrc: Taxi,
      heading: "Online Booking",
      content:
        "We are many variations of passages available but the majority have suffered alternation in some form by injected humour words believable",
    },
  ];
  return (
    <div className=" bg-black text-white">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row justify-content-center">
              {items.map((item) => (
                <div className="col-10 col-md-4 mb-5">
                  <div
                    className="card position-relative p-md-3"
                    style={{
                      overflow: "hidden",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div
                      style={{ border: "2px solid #ffffff" }}
                      className="bg-white"
                    >
                      <img
                        src={item.MainimgSrc}
                        className="card-img-top w-100"
                        alt="..."
                      />
                      <div className="d-flex justify-content-end ">
                        <img
                          src={item.IconimgSrc}
                          alt="..."
                          width={"20%"}
                          className="rounded-circle me-5 positioned-image"
                        />
                      </div>
                      <div className="card-body" style={{}}>
                        <h5 className="card-title">{item.heading}</h5>
                        <p className="card-text">{item.content}</p>
                        <button
                          className="rounded-pill"
                          style={{ backgroundColor: "#4cb03a" }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
