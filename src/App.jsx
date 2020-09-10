import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import ContactPage from "./pages/Contact";

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
            <Portfolio />
          </Route>
          <Route exact path="/contact-me">
            <ContactPage />
          </Route>
          <Route exact path="/manage">
            <Project project="manage" />
          </Route>
          <Route exact path="/bookmark">
            <Project project="bookmark" />
          </Route>
          <Route exact path="/insure">
            <Project project="insure" />
          </Route>
          <Route exact path="/fylo">
            <Project project="fylo" />
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
