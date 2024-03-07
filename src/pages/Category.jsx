import React from "react";
import "./Category.css";
import bascketball from '../assets/close-up.png'
import soccer from '../assets/soccer-ball.png'
import car from '../assets/car.png'
import tennis from '../assets/red-ping.png'

export default function Category() {
  return (
      <div className="Category mt-5">
        <h1 className="category-heading">Category</h1>
        <div className="card-div">
          <div className="cards">
            <div className="sqaure" >
              <div className="card-text">FOOTBALL</div>
            </div>
            <div>
              <img src={soccer} alt="" className="card-img" />
            </div>
          </div>
          <div className="cards">
            <div>
              <img src={bascketball} alt="" className="card-img" />
            </div>
            <div className="sqaure">
              <div className="card-text">BASKET BALL</div>
            </div>
          </div>
          <div className="cards">
            <div className="sqaure">
              <div className="card-text">CAR SPORT</div>
            </div>
            <div>
              <img src={car} alt="" className="card-img" />
            </div>
          </div>
          <div className="cards">
            <div>
              <img src={tennis} alt="" className="card-img" />
            </div>
            <div className="sqaure">
              <div className="card-text">TABLE TENNIS</div>
            </div>
          </div>
        </div>
      </div>
  );
}
