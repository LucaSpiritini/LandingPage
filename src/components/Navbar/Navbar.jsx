import React from "react";
import BtnNav from "./BtnNav"
import Box from '@mui/material/Box'

import "./navbar.css"

const pages = [
  { title: "home", link:"/" },
  { title: "contacto", link:"/contacto" },
  // { title: "turnos", link:"/turnos" },
  { title: "turnos", link:"https://secure.iturnos.com/inicio/usuarios/index.php?id_empresa=133" },
];

const Navbar = () => {
  return (
    <Box
      className="navbar-link-box"
    >
      {
        pages.map((page, index) => (
          <BtnNav page={page} key={index} />
        ))
      }
    </Box>
  );
};

export default Navbar;
