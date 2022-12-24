import React from "react";
import "./sneakerCard.css";

const SneakerCard = () => {
  const sneakerImg = "https://source.unsplash.com/jLEGurepDco";
  const pages = ["men", "female", "favorites"];

  return (
    <div className="sneakerCardContainer">
      <img
        src={sneakerImg}
        alt="sneaker"
        style={{ width: "300px", height: "200px" }}
      />
      <h3>{`${pages[0].toUpperCase()}'S SHOE`}</h3>
      <div className="sneakerDetails">
        <h2>Sneaker Name</h2>
        <h2>$75</h2>
      </div>
      <h3 className="sneakerDescription">
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime placeat facere possimus, omnis voluptas assumenda
      </h3>
    </div>
  );
};

export default SneakerCard;
