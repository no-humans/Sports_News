import React from "react";
import Styles from "./Subscription.module.css"
import Rugby from "../../assets/american-football-player-posing-with-ball-white 1 (1).png";

export default function Subscription() {
  return (
    <div className={Styles.Main}>

      <div className={Styles.sub_main}>
        <div className={Styles.image}>
          <img src={Rugby} alt="" />
        </div>
        <div className={Styles.Text}>
          <h6>
            Newsletter <br /> Subscription
          </h6>
        </div>
        <div className={Styles.Emailbox}></div>
      </div>
    </div>
  );
}
