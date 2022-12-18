import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar disableGutters>
        <Box className="container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography className="navlinks">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Female">Female</Link>
            </li>
          </Typography>

          <IconButton>
            <Avatar
              sx={{ crop: "face" }}
              alt="human"
              src="https://source.unsplash.com/79GLX12EY98"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
