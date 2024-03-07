import React from "react";
import "./Courosel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Courosel } from "../../Database";

export default function Coursel1() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {Courosel &&
          Courosel.map((e) => (
            <div
              key={e.id}
              className={`carousel-item ${e.id === 0 ? "active" : ""}`}
            >
              <img src={e.img} className="d-block w-100" alt="carousel-img" />
              <div className="carousel-caption d-none d-md-block">
                <span>{e.dateplace}</span>
                <h5>{e.heading}</h5>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
