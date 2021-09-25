import React, { useState } from "react";
import Axios from "axios";
import "./style.css";
import { useHistory } from "react-router";
import Rating from "../Rating/index";
import content from "../../Constants/ratingOverlay.json";
function RatingOverlay() {
  const [rate, setRate] = useState(0);
  const [rateError, setRateError] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [textError, setTextError] = useState(false);

  const [submitError, setSubmitError] = useState(false);
  const history = useHistory();
  const {
    hero_title,
    rating_label,
    out_of,
    enter_rating,
    review_label,
    enter_review,
    review_not_submitted,
    submit_review,
  } = content;
  function handleReviewText(e) {
    setReviewText(e.target.value);
  }

  const getDatafromChild = (data) => {
    setRate(data);
  };

  async function handleSubmit() {
    try {
      if (rate < 1) {
        return setRateError(true);
      }
      setRateError(false);
      if (reviewText.length == 0) {
        return setTextError(true);
      }
      setTextError(false);
      const response = await Axios.post("new", {
        reviewText: reviewText,
        rating: rate,
      });
      if (response.data.message === "Review were not submitted") {
        return setSubmitError(true);
      }
      setSubmitError(false);

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="rating-overlay">
      <div className="actual-rating">
        <div className="content">
          <p className="rating-heading">{hero_title}</p>
          <p className="rating-title">{rating_label}</p>
          <Rating getDatafromChild={getDatafromChild} />
          <p className="display-rate">
            {rate} {out_of}
          </p>
          {rateError && <p className="error">{enter_rating}</p>}
          <p className="rating-title">{review_label}</p>
          <input
            type="text"
            className="no-outline"
            placeholder="Start Typing..."
            onChange={handleReviewText}
          />
          {textError && <p className="error">{enter_review}</p>}
          {submitError && <p className="error">{review_not_submitted}</p>}
          <a className="btn" onClick={handleSubmit}>
            {submit_review}
          </a>
        </div>
      </div>
    </div>
  );
}

export default RatingOverlay;
