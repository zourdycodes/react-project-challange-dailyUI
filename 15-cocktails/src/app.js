import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as PATH from "./constant/routes";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import components
import Navbar from "./components/Navbar";

// utils
import { CustomSwitch } from "./utils/routing";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <CustomSwitch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.ABOUT} component={About} />
        <Route path={`/cocktail/:id`} children={<SingleCocktail />} />
        <Route path={PATH.ERROR} component={Error} />
      </CustomSwitch>
    </Router>
  );
};
