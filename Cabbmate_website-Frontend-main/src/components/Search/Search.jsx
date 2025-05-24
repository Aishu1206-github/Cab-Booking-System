import React from "react";
import BookRide from "../BookRide/BookRide";
import Fetched_rides from "../Fetched_rides/Fetched_rides";

export default function Search() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <BookRide />
      <Fetched_rides />
    </div>
  );
}
