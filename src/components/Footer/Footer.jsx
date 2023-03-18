import React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./footer.css";

const Footer = () => {
  return (
    <Box mt={3} position="fixed" bottom="0" className="footer-box">      
      <Box className="group">
        Av. Rivadavia 5466 1D - CABA
        <br />
        WhatsApp +54 9 11 3688 5591
      </Box>
      <Box className="group">
        <Box>
          <IconButton
            target="_blank"
            href="https://instagram.com/"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://facebook.com/"
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
      {/* <Box className="group">Footer</Box> */}
    </Box>
  );
};

export default Footer
