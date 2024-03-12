import React from "react";
import Styles from "../Footer/Footer.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Right from "../../assets/Right Button.png"
import Left from "../../assets/Left Button.png"

export default function Footer() {
  const [value, setValue] = React.useState(0);
  return (
    <div className={Styles.Main}>
      <div className={Styles.left}>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon />}
            />
            <BottomNavigationAction label="x" icon={<XIcon />} />
          </BottomNavigation>
        </Box>
      </div>
      <div className={Styles.Right}>
        <div className={Styles.leftarrow}>
          <img src={Left} alt="" />
        </div>
        <div className={Styles.Background}>
        <div className={Styles.Num1}>1</div>
        </div>
        <div className={Styles.Num}>2</div>
        <div className={Styles.Num}>3</div>
        <div className={Styles.Num}>4</div>
        <div className={Styles.rightarrow}>
          <img src={Right} alt="" />
        </div>
      </div>
    </div>
  );
}
