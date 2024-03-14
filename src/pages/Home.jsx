import React, { useState } from "react";
import Styles from "./Home.module.css";
import { Details } from "../Database";
import soccerer from "../assets/basketball-player-action-sunset 1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Home() {
  const [additionalText, setAdditionalText] = useState("");

  const handleContinueReading = () => {
    setAdditionalText((prevText) => (prevText ? "" : "Top scorer to the final match"));
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.Sub_main}>
        <div className={Styles.basket_ball}> </div>

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
          <img src={soccerer} className={Styles.Image_class} alt="" />{" "}

        </div>
        <div className={Styles.Paragraph} style={{ textAlign: "center" }}>
            <p className={Styles.Continue_paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad,
              incidunt voluptate nam placeat, nemo accusantium voluptates ipsa
              
            </p>
            {additionalText && <p>{additionalText}</p>}
            <Stack style={{paddingTop:"1rem",paddingLeft:"3rem"}} spacing={2} direction="row">
              <Button  className={Styles.ReadButton} onClick={handleContinueReading} variant="contained" color="inherit">
              {additionalText ? "Show Less" : "Continue Reading"}              </Button>
            </Stack>{" "}
          </div>
        <div className={Styles.card}>
          {Details &&
            Details.map((data) => (
              <div className={Styles.data} key={data.id}>
                <div
                  className={Styles.Images}
                  style={{ position: "relative", paddingBottom: "5px" }}
                >
                  <img src={data.img} alt="" className={Styles.data_img} />
                  <div
                    className={Styles.details}
                    style={{
                      borderTop: data.id === 0 ? "none" : "",
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <p className={Styles.date} style={{ marginBottom: "0" }}>
                      {data.dateplace}
                    </p>
                    <h6 className={Styles.description}> {data.heading}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
