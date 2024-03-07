import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Head() {
  return (
    <><nav class="navbar justify-content-center  navbar-expand-lg bg-body-tertiary">
    <div class="d-flex  ">
      <a class="navbar-brand justify-content-center" href="/">Sports News</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
          <li class="nav-item ">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Trending News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Recent News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Club Ranking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Sports Article</a>
          </li>
          
        </ul>
        </div>
    </div>
    <form class="d-flex flex-end" role="search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
  </nav>
  </>
  )
}
