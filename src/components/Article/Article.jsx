import React from "react";
import Styles from "../Article/Article.module.css";
import { ArticleData } from "../../Database";
export default function Article() {
  return (
    <div className={Styles.ArticleMain}>
      <h3 className={Styles.headingarticle}>Sports Article </h3>
      <div className={Styles.Submain}>
        <div className={Styles.Sports}>
          {ArticleData &&
            ArticleData.map((e) => {
              return (
                <div className={Styles.DMain} key={e.id}>
                  <div className={Styles.EMain} >
                    <div className={Styles.Image}>
                      <img src={e.img} alt="" />
                    </div>
                    <div className={Styles.Profile}>
                      <img src={e.profile} alt="" />
                      <p>{e.name}</p>
                    </div>
                    <div className={Styles.Head}>
                      <span>{e.date}</span>
                      <h5>{e.heading}</h5>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
