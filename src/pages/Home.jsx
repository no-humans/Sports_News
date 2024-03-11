import React from "react";
import Styles from "./Home.module.css";
import { Details } from "../Database";

export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.Sub_main}>
        <div className={Styles.basket_ball}>
          <div className={Styles.text}></div>
          <span className={Styles.first}>top</span>
          <span className={Styles.second}>scorer to</span>
          <span className={Styles.third}>the final </span>
          <span className={Styles.fourth}> match</span>
          <div className={Styles.soccerer}> </div>
            <div className={Styles.card}>
              {Details &&
                Details.map((data) => (
                  <div className={Styles.data} key={data.id}>
                    <div>
                      <img src={data.img} alt="" className={Styles.data_img} />
                    </div>
                    <div
                      className="details"
                      style={{
                        borderTop: data.id === 0 ? "none" : "1px solid #B8C2CE",
                      }}
                    >
                      <span className="date">{data.dateplace}</span>
                      <h5 className="description"> {data.desc}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
  );
}

// import React from 'react'
// import Styles from "./Home.module.css"
// import basketImage from "../assets/basketball-player-action-sunset 1.png"
// import { Details } from "../Database";

// function Home() {
//   return (
//           <div className={Styles.main}>
//           <div className="section-main">
//             <div>
//           <div className={Styles.text}>
//             <p>Top <br/>
//             scorer to <br/>
//             the final <br/>
//             match
//             </p>
//             <div className={Styles.basketBallDiv}>
//           <img src={basketImage} alt="basketImage"/>
//           </div>
//           </div>
//           </div>

//           </div></div>
//   )
// }

// export default Home
