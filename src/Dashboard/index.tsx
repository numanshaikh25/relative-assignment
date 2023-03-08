import React from "react";
import "../App.css";
import Card from "../components/Card";
import { data } from "../assets/data/tokens";
function Dashboard() {
  return (
    <div className="main-container">
      <div className="trending">
        <div style={{ width: "0.833rem", height: "0.833rem", border: "2px solid #DC1FFF", borderRadius: "15%" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <polyline
              points="24 128 76 56 180 200 232 128"
              fill="#DC1FFF"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12"
            />
          </svg>
        </div>
        <p style={{ marginLeft: "2rem" }}>Trending Assets</p>
      </div>
      <div className="card-container">
        {data.map((d) => {
          return (
            <Card
              logo={d.logo}
              name={d.name}
              price={d.price}
              fluctuation={d.fluctuation}
              positive={d.positive}
              tvl={d.tvl}
              popular_pairs={d.popular_pairs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
