import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";

const Navbar = () => {
  return (
    <AppBar position="static">
      <div className="navbar">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Men">Men</Link>
        </li>
        <li>
          <Link to="/Female">Female</Link>
        </li>
      </div>
    </AppBar>
  );
};

export default Navbar;
