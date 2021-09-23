import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/index";
import RatingOverlay from "./Components/RatingOverlay/index";
import NoMatch from './Components/NoMatch/index';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ratingoverlay">
          <RatingOverlay />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
