import React from "react";
import "./Home.css";
import { Details } from "../Database";

export default function Home() {
  return (
    <div className="main " style={{ width: "100vw" }}>
      <div className="section-main">
        <div className="basket-ball">
          <div className="text"></div>
          <span className="first">top</span>
          <span className="second">scorer to</span>
          <span className="third">the final </span>
          <span className="fourth"> match</span>
          <div className="soccerer">
            {/* <p className="lorem-first">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, ut. Blanditiis consequuntur, nesciunt suscipit ipsam
              facilis perspiciatis modi a dolor reprehenderit itaque? Dolores
              ullam magni eveniet cum vero quibusdam labore?
            </p> */}
          </div>
          <div className="container">
            <div className="card">
              {Details && Details.map((data) => (
                <div className="data" key={data.id}>
                  <div>
                    <img src={data.img} alt="" className="data-img" />
                  </div>
                  <div className="details" style={{borderTop: data.id===0? "none":"1px solid #B8C2CE"}}>
                    <span className="date">{data.dateplace}</span>
                    <h5 className="description"> {data.desc}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
