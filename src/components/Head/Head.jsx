import React from "react";
import Styles from "../Head/Head.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";

export default function Head() {
  return (
    <div className={Styles.Main}>
      <nav class="navbar  navbar-expand-lg bg-body-tertiary" style={{justifyContent:"space-between"}} className={Styles.Sub_Main}>
        <div class="d-flex  ">
          <a class="navbar-brand justify-content-center" href="/" className={Styles.Logo}>
            <h5>Sports News</h5>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav justify-content-center me-auto mb-2 mb-lg-0" style={{justifyContent:"space-between"}}>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Trending News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Recent News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Club Ranking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Sports Article
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form class="d-flex flex-end" className={Styles.search} role="search">
          <div>
            <button
              style={{ display: "flex" }}
              class="btn btn-outline-success"
              type="submit"
            >
              <p>
                <IoSearchOutline />
              </p>
              <p>Search</p>
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
}
