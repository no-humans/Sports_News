import React from "react";
import Styles from "./Home.module.css";
import { Details } from "../Database";
import soccerer from "../assets/basketball-player-action-sunset 1.png";

export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.Sub_main}>
        <div className={Styles.basket_ball}>
          <div
            className={Styles.text}
            style={{
              marginRight: "auto",
              marginLeft: "8rem",
              marginTop: "7rem",
            }}
          >
            <h2 className={Styles.Heading}>
              Top <br /> scorer to <br /> the final <br /> match
            </h2>
          </div>
          <div className={Styles.soccerer} style={{ marginLeft: "13rem" }}>
            <img src={soccerer} alt="" />{" "}
          </div>
          <div className={Styles.card}>
            {Details &&
              Details.map((data) => (
                <div className={Styles.data} key={data.id}>
                  <div className={Styles.Images} style={{position:"relative",paddingBottom:"5px"}}>
                    <img src={data.img} alt="" className={Styles.data_img} />
                  <div
                    className={Styles.details } 
                    style={{
                      borderTop: data.id === 0 ? "none" : "1px solid #B8C2CE", position:"absolute",bottom:"0"
                    }}
                  >
                    <p className={Styles.date} style={{marginBottom:"0"}}>{data.dateplace}</p>
                    <h6 className={Styles.description}> {data.heading}</h6>
                  </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
