import React from "react";
import './Footer.css'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="x" icon={<XIcon />} />
      </BottomNavigation>
    </Box>
  );
}
