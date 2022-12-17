import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Men", "Female", "Kids", "Favorites"];

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar disableGutters>
        {/* <Box>
          <Menu>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> */}
        <Typography>
          <Link to="/Home">Home</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Female">Female</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
