import React from "react";
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";

export default function Cards() {
  const items = [
    {
      id: 1,
      MainimgSrc: c1,
      heading: "For any budget",
      content:
        "From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.",
    },
    {
      id: 2,
      MainimgSrc: c2,
      heading: "For any distance",
      content:
        "Book rides within the city with Daily , or take a trip to your favourite destinations outside the city with Outstation",
    },
    {
      id: 3,
      MainimgSrc: c3,
      heading: "For any duration",
      content:
        "Book rides within the city with Daily , or take a trip to your favourite destinations outside the city with Outstation",
    },
  ];
  return (
    <div>
      <div className="container-fluid bg-black text-white p-5">
        <div className="row bg-black text-white p-md-5">
          {items.map((item) => (
            <div className="col-12 col-md-4 mb-3">
              <div class="card bg-black text-white" style={{ border: "none" }}>
                <img src={item.MainimgSrc} class="card-img-top w-100 mb-3" />
                <div class="card-body p-0 m-0">
                  <h5 class="card-title">{item.heading}</h5>
                  <p class="card-text">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
