import React, { useContext } from "react";
import "./Sliding.css";
import { SearchContext } from "../homepage/homepage";

export default function Sliding() {
  const { ShowSearch, ShowPublish } = useContext(SearchContext);
  return (
    <div className="sliding-container">
      <div className="overlay">
        <div className="welcome">
          Welcome to <span className="highlight">CABBMATE!</span>
        </div>
        <div className="mheading">BOOK CAB FOR YOUR RIDE</div>
        <p className="content">
          There are many variations of passages available. The majority have
          suffered alteration in some form. Generators on the Internet tend to
          repeat predefined chunks, injecting humour and randomised words that
          look even slightly believable.
        </p>
        <div className="btn-container w-100">
          <button className="cta-button" onClick={ShowSearch}>
            Book Now
          </button>
          <button className="cta-button" onClick={ShowPublish}>
            Publish Now
          </button>
        </div>
      </div>
    </div>
  );
}
