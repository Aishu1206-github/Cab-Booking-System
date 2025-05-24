import React from "react";
import b1 from "../../Assets/b1.jpg";
import b2 from "../../Assets/b2.jpeg";
import b3 from "../../Assets/b3.jpeg";
import "./Blogs.css";

export default function Blogs() {
  const items = [
    {
      id: 1,
      MainimgSrc: b1,
      heading: "Cabbmate signs PLI Agreement",
    },
    {
      id: 2,
      MainimgSrc: b2,
      heading: "Cabbmate to invest 500 Million",
    },
    {
      id: 3,
      MainimgSrc: b3,
      heading: "India's first indigenous cell",
    },
  ];

  return (
    <div>
      <div className="container-fluid bg-black text-white p-5">
        <div className="row heading mb-4">Recent from our blogs</div>

        {/* Desktop View: Grid Layout */}
        <div className="row d-none d-md-flex">
          {items.map((item) => (
            <div className="col-12 col-sm-6 col-md-4">
              <img src={item.MainimgSrc} className="w-100" height={300} />
              <p className="sub_heading mt-2">{item.heading}</p>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#59dab2",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Know More<i className="bi bi-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="row flex-nowrap overflow-auto d-flex d-md-none">
          {items.map((item) => (
            <div className="col-12">
              <img src={item.MainimgSrc} className="w-100" height={300} />
              <p>{item.heading}</p>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#59dab2",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Know More<i className="bi bi-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
