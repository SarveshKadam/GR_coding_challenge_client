import React from "react";
import { useHistory } from "react-router";

import "./style.css";
function NoMatch() {
  const history = useHistory();
  return (
    <div className="big-text">
      <h5>Oops Page Not Found</h5>
      <h5>😥</h5>
      <button className="btn" onClick={() => history.push("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default NoMatch;
