import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "pink",
      }}
    >
      <Logo />
      <Navbar />
    </Box>
  );
};

export default Header;
