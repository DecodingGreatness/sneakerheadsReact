import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const pages = ["Men", "Female", "Kids", "Favorites"];

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar disableGutters>
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {pages.map((page) => (
            <Button key={page}>
              <Typography variant="h6">{page}</Typography>
            </Button>
          ))}
        </Box>
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
