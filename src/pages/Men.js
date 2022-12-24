import React from "react";
import SneakerCard from "../components/sneakerCard";
import "./home.css";
import FilterBar from "../components/Cards/filterBar";
const Men = () => {
  return (
    <div className="menBackground" style={{ display: "flex" }}>
      <FilterBar />
      <div>
        <SneakerCard />
      </div>
    </div>
  );
};

export default Men;
