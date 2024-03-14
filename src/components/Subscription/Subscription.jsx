import React from "react";
import Styles from "./Subscription.module.css";
import Rugby from "../../assets/american-football-player-posing-with-ball-white 1 (1).png";
import vector from "../../assets/Vector.png";
import Rectangle from "../../assets/Rectangle 21981 (1).png";
import Arrow from "../../assets/Arrow 4.png";

export default function Subscription() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.sub_main}>
        <div className={Styles.section}>
          <div className={Styles.Text}>
            <div className={Styles.Head}>
              <h2 className={Styles.Font}>
                Newsletter <br /> Subscription
              </h2>
            </div>
            <div className={Styles.Emailbox}>
              <input type="email" placeholder="Enter email address" className={Styles.email_input} />
              <label htmlFor="email-input" className={Styles.email_input_button}>
                <div className={Styles.email_input_image_wrapper}>
                  <img src={Rectangle} alt="Submit" className={Styles.email_input_image} />
                  <img src={Arrow} alt="Arrow" className={Styles.additional_image} />
                </div>
              </label>
            </div>
          </div>
          <div className={Styles.image}>
            <img className={Styles.image_class} src={Rugby} alt="" />
          </div>
          <div className={Styles.image1}>
            <img className={Styles.image1_class} src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
