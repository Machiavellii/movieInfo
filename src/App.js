import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MovieState from "./context/movies/movieState";

import Header from "./component/layout/Header";
import Cards from "./component/pages/Movies";
import Card from "./component/pages/Movie";
import NotFound from "./component/layout/NotFount";

const App = () => {
  return (
    <MovieState>
      <Router>
        <Header />
        <div className="container mb-3-m">
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route exact path="/:id" component={Card} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
