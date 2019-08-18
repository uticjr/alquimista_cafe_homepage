import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./view/Main";
import Thanks from "./view/Thanks";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/agradecimentos" component={Thanks} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
