import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </div>
  );
};

export default Navbar;
