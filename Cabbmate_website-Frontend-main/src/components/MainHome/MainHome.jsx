import React from "react";
import Sliding from "../Sliding/Sliding";
import Download from "../Download/Download";
import Features from "../Features/Features";
import Cards from "../Cards/Cards";

export default function MainHome({ scrollToFeatures }) {
  return (
    <div>
      {/* Attach slidingRef here */}
      <Sliding />

      <Download />

      <div id="features-section">
        <Features />
      </div>

      <Cards />
    </div>
  );
}
