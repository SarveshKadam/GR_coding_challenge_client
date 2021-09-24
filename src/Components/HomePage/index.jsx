import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

import './style.css';
function HomePage() {
  return (
    <div class="homepage">
      <div class="home-container">
        <h3 class="home-heading">The Minimalist Entreprenuer</h3>
        <br />
        <div class="final-container">
          <div class="final-child">
            <span id="final-rate" class="final-rate"></span>
            <div class="Stars" id="final-star-rate" style={{"--rating": 4.5}}></div>
          </div>
          <div class="final-child-btn">
            <Link to="/ratingoverlay">
            <a
              class="btn"
            >
              Add Review
            </a>
            </Link>
          </div>
        </div>
        <hr class="solid-line" />
        <div class="review-list">
          <p class="sub-heading">Reviews</p>
          <div
            id="ratings"
            class="review-text"
            style={{"background-color": "#ffffff"}}
          >
              {data.review_data.map((value)=>(
                  <div className="set">
                  <span className="Stars" style={{"--rating": value.rating}}></span>
                  <span><strong>{value.rating}, </strong>{value.review}</span>
                  <br />
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
