import React from "react";
import { Helmet } from "react-helmet";
import Button from "./Button";
import Works from "./Works";

const LandingPage = () => {
  return (
    <div className="mr-home-main pages">
      <Helmet>
        <title>abolfazl | Home</title>
      </Helmet>
      <div className="mr-name">
        <h1 className="name">abolfazl</h1>
        <h1 className="family">mahjoob</h1>
      </div>
      <div className="mr-work">
        <h3>I'm a</h3>
        <h2 className="mr-works">
          <Works />
        </h2>
      </div>
      <div className="mr-btn">
        <Button />
      </div>
    </div>
  );
};

export default LandingPage;
