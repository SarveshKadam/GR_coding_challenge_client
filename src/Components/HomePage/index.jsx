import React, { useState, useEffect } from "react";
import Axios from "axios";
import content from "../../Constants/homepage.json";
import "./style.css";
import { useHistory } from "react-router";
function HomePage() {
  const [reviewData, setReviewData] = useState();
  const [finalRate, setFinalRate] = useState(0);
  let history = useHistory();
  const { hero_title, add_review, reviews } = content;
  const fetchData = async () => {
    try {
      const response = await Axios.get();
      setReviewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await fetchData();

    //Final rate calculation
    let sum = 0;
    let leng = 0;
    reviewData &&
      reviewData.map((value) => {
        sum = sum + value.rating;
        leng = leng + 1;
      });
    const calc = (sum / leng).toFixed(1);
    setFinalRate(calc);
  }, [reviewData]);

  return (
    <div className="homepage">
      <div className="home-container">
        <h3 className="home-heading">{hero_title}</h3>
        <br />
        <div className="final-container">
          <div className="final-child">
            {finalRate && (
              <>
                <span id="final-rate" className="final-rate">
                  {finalRate}
                </span>
                <div
                  className="Stars"
                  id="final-star-rate"
                  style={{ "--rating": finalRate }}
                ></div>
              </>
            )}
          </div>
          <div className="final-child-btn">
            <a
              className="btn"
              onClick={() => {
                history.push("/ratingoverlay");
              }}
            >
              {add_review}
            </a>
          </div>
        </div>
        <hr className="solid-line" />
        <div className="review-list">
          <p className="sub-heading">{reviews}</p>
          <div
            id="ratings"
            className="review-text"
            style={{ backgroundColor: "#ffffff" }}
          >
            {reviewData &&
              reviewData.map((value) => (
                <div className="set" key={value._id}>
                  <span
                    className="Stars"
                    style={{ "--rating": value.rating }}
                  ></span>
                  <span>
                    <strong>{value.rating}, </strong>
                    {value.reviewText}
                  </span>
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
