import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import "./navbar.css";

const BtnNav = ({ page }) => {
  return (
    <>
      <Link
        className="link-button"
        component={NavLink}
        to={page.link}
        sx={{textDecoration: 'none'}} 
        style={({ isActive }) => (isActive ? { color: "grey", borderBottom: "1px dashed grey" } : undefined)}
      >
        {page.title}
      </Link>
    </>
  );
};

export default BtnNav;
