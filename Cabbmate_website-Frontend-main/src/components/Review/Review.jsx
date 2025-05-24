import React from "react";
import "../Blogs/Blogs.css";
import r1 from "../../Assets/r1.jpeg";
import r2 from "../../Assets/r2.jpeg";
import r3 from "../../Assets/r3.jpeg";
import "./Review.css";

export default function Review() {
  return (
    <div>
      <div className="container-fluid bg-black text-white p-5">
        <div className="row">
          <div className="col-12">
            <p className="heading">Making a difference</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="sub_heading">
              Ola Foundation, the social welfare arm of Ola, is an outcome of a
              belief based on real interactions, research, and extensive study
              on the far-reaching impact of enabling and equipping people.
            </p>
          </div>
          <div className="col-6 d-none d-md-flex flex-row gap-5">
            <p>
              <p>
                <span className="sub_heading">
                  1 Lakh+
                  <br />
                </span>{" "}
                Families impacted in
                <br /> FY 2020-21
              </p>
            </p>
            <p>
              <p>
                <span className="sub_heading">
                  93 Lakh+
                  <br />
                </span>{" "}
                Meals enabled across
                <br /> India in FY 2020-21
              </p>
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12 col-md-6">
            <img src={r1} className="w-100 sm pb-md-2 mb-2 mb-md-0" />
            <img src={r2} className="w-100 sm pt-md-1 mb-2 mb-md-0" />
          </div>
          <div className="col-12 col-md-6">
            <img src={r3} className="w-100 bg mb-2 mb-md-0" />
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            {" "}
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#59dab2",
                display: "flex",
                alignItems: "center",
              }}
              className="sub_heading"
            >
              More About Cabbmate <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
