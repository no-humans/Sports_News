import React from "react";
import "./News.css"; // Assuming this is your CSS file for News component
import drink from "../assets/sportsman-drinking-water-training-stationary-bike 1.png";
import { Database } from "../Database";

export default function News() {
  return (
    <div className="news-container">
      <div className="news-left-side">
        <div>
          <h3 className="news-trending-heading">Trending News</h3>
        </div>
        <div className="news-content">
          {Database &&
            Database.map((news) => (
              <div className="news-item" key={news.id}>
                <div>
                  <img src={news.img} alt="" className="news-img" />
                </div>
                <div
                  className="news-details"
                  style={{
                    borderTop: news.id === 0 ? "none" : "1px solid #B8C2CE",
                  }}
                >
                  <span className="event-date">{news.dateplace}</span>
                  <h6 className="news-heading">{news.heading}</h6>
                  <p className="news-desc">{news.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="news-right-side">
        <div className="news-overlay"></div>
        <img src={drink} alt="" />
        <div className="news-top-left-text">
          <span>Cycling</span>
        </div>
        <div className="news-bottom-left-text">
          <span>Debits - 03 June 2023</span>
          <h3>DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
        </div>
      </div>
    </div>
  );
}
