import React from "react";
import Styles from "./Subscription.module.css"
import Rugby from "../../assets/american-football-player-posing-with-ball-white 1 (1).png";
import vector from "../../assets/Vector.png"

export default function Subscription() {
  return (
    <div className={Styles.Main}>

      <div className={Styles.sub_main}>
        <div className={Styles.section}>
      <div className={Styles.Text}>
        <div className={Styles.Head}>
          <h2>
            Newsletter <br /> Subscription
          </h2>
          </div>
          <div className={Styles.Emailbox}>
            <input type="email" placeholder="enter" />
          </div>

        </div>
        <div className={Styles.image}>
          <img src={Rugby} alt="" />
          <img src={vector} alt="" />
        </div>
 
        </div>
      </div>
    </div>
  );
}
