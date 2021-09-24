import React from "react";
import { Link } from "react-router-dom";
import './style.css';
function RatingOverlay() {
  return (
    <div className="rating-overlay">
      <div className="actual-rating">
        <div className="content">
          <p className="rating-heading">What's your rating?</p>
          <p className="rating-title">Rating</p>
          <div className="Stars" id="final-star-rate" style={{'--rating':3.8}}></div>
          <p className="rating-title">Review</p>
          <input type="number" className="no-outline" placeholder="_/5" />
          <input type="text" className="no-outline" placeholder="Start Typing..." />
          <br />
          <Link to="/">
          <a
            className="btn"
          >
            Submit Review
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RatingOverlay;
