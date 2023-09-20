import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";
import { useSnackbar } from "../contexts/SnackbarContext";

const NavItem = styled(Typography)({
  textDecoration: "none",
  color: "white",
});

const Navbar = () => {
  const showSnackbar = useSnackbar();
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <NavItem
          component={Link}
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "50px", width: "50px", cursor: "pointer" }}
            src="/ideogram.jpeg"
            alt="logo"
          />
          <Typography variant="h6">Logify</Typography>
        </NavItem>
        <NavItem variant="subtitle1" component={Link} to="/counter">
          Counter
        </NavItem>
        <Button
          sx={{ ml: "auto" }}
          color="primary"
          onClick={() => {
            showSnackbar("You're toasted!");
          }}
        >
          Toast me!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
