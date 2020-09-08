import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <h1>Portfolio</h1>
          </Route>
          <Route exact path="/contact-me">
            <h1>Contact Me</h1>
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
