import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/Men">Men</Link>
      </li>
    </div>
  );
};

export default Navbar;
