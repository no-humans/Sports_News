import React, {useState} from "react";
import Styles from "../Head/Head.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";

export default function Head() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar) {
      if (isCollapsed) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
    }  };
  return (
    <div className={Styles.Main}>
      <nav class="navbar  navbar-expand-lg bg-body-tertiary" style={{justifyContent:"center", gap:"1rem"}} className={Styles.Sub_Main}>
        <div class="d-flex  ">
          <a class="navbar-brand justify-content-center" href="/" className={Styles.Logo}>
            <h5>Sports News</h5>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon" className={Styles.toogle}></span>
          </button>
          <div
            class={`collapse navbar-collapse justify-content-center ${
              isCollapsed ? "collapse" : ""
            }`}
          >
            <ul class="navbar-nav justify-content-center mx-auto mr-auto me-auto mb-2 mb-lg-0" >
              <li class="nav-item " className={Styles.navstyle}>
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item" className={Styles.navstyle}>
                <a class="nav-link active" aria-current="page" href="/">
                  Category
                </a>
              </li>
              <li class="nav-item" className={Styles.navstyle}>
                <a class="nav-link active" aria-current="page" href="/">
                  Trending News
                </a>
              </li>
              <li class="nav-item" className={Styles.navstyle}>
                <a class="nav-link active" aria-current="page" href="/">
                  Recent News
                </a>
              </li>
              <li class="nav-item" className={Styles.navstyle}>
                <a class="nav-link active" aria-current="page" href="/">
                  Club Ranking
                </a>
              </li>
              <li class="nav-item" className={Styles.navstyle}>
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
             className={Styles.ButtonSubmit}
              type="submit" variant="light"
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
