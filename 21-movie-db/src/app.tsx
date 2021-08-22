import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`/movie/:id`} component={Movie} />
    </Switch>
  );
};
