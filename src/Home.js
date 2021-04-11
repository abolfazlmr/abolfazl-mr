import React, { useState } from "react";
import About from "./component/About";
import LandingPage from "./component/LandingPage";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import { Route, Switch, useHistory } from "react-router";
// import Contact from "./component/Contact";

const MrHome = () => {
  const [getStart, setGetStart] = useState(true)
  const history = useHistory()
  if (getStart) {
    history.push("/")
    setGetStart(false)
  }
  return (
    <>
      <div className="mr-section-home-img"></div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </>
  );
};

export default MrHome;
