import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/index";
import RatingOverlay from "./Components/RatingOverlay/index";
import NoMatch from './Components/NoMatch/index';
import Axios from 'axios';

Axios.defaults.withCredentials = true;
Axios.defaults.baseURL = 'https://gumroad-coding-challenge.herokuapp.com/';

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
