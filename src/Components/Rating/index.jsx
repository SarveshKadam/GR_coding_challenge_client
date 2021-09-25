import React, { useState, useEffect } from "react";

import "./style.css";
function index({ getDatafromChild }) {
  const [rate, setRate] = useState(0);

  function handleRate(e) {
    setRate(e.target.value);
  }
  useEffect(() => {
    getDatafromChild(rate);
  }, [rate]);

  return (
    <div className="container" style={{ "--starsize": "50px" }}>
      <fieldset className="rating">
        <input
          name="rating"
          type="radio"
          id="star5"
          value="5"
          onClick={handleRate}
        />
        <label htmlFor="star5" className="full"></label>
        <input
          name="rating"
          type="radio"
          id="star4.5"
          value="4.5"
          onClick={handleRate}
        />
        <label htmlFor="star4.5" className="half"></label>
        <input
          name="rating"
          type="radio"
          id="star4"
          value="4"
          onClick={handleRate}
        />
        <label htmlFor="star4" className="full"></label>
        <input
          name="rating"
          type="radio"
          id="star3.5"
          value="3.5"
          onClick={handleRate}
        />
        <label htmlFor="star3.5" className="half"></label>
        <input
          name="rating"
          type="radio"
          id="star3"
          value="3"
          onClick={handleRate}
        />
        <label htmlFor="star3" className="full"></label>
        <input
          name="rating"
          type="radio"
          id="star2.5"
          value="2.5"
          onClick={handleRate}
        />
        <label htmlFor="star2.5" className="half"></label>
        <input
          name="rating"
          type="radio"
          id="star2"
          value="2"
          onClick={handleRate}
        />
        <label htmlFor="star2" className="full"></label>
        <input
          name="rating"
          type="radio"
          id="star1.5"
          value="1.5"
          onClick={handleRate}
        />
        <label htmlFor="star1.5" className="half"></label>
        <input
          name="rating"
          type="radio"
          id="star1"
          value="1"
          onClick={handleRate}
        />
        <label htmlFor="star1" className="full"></label>
      </fieldset>
    </div>
  );
}

export default index;
