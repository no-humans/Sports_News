import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Courosel } from "../../Database";
import "../Courosel/Courosel.css"

export default function Coursel1() {
  return (
    <div className="carousel-container" style={{ padding: "1rem" }}>
      <Carousel>
        {Courosel && Courosel.map((e) => (
          <Carousel.Item className="carousel-item" key={e.id}>
            <div className="overlay">
            <img src={e.img} className="carousel-img d-block w-100" alt="carousel-img" />
            </div>
            <Carousel.Caption className="carousel-caption">
              <span className="carousel-date">{e.dateplace}</span>
              <h2 className="carousel-heading">{e.heading}</h2>
              <p className="carousel-desc">{e.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
