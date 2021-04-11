import React from "react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div className="mr-portfolio pages">
      <Helmet>
        <title>abolfazl | Portfolio</title>
      </Helmet>
      <div className="title">
        <h2>Creative </h2>
        <h2>Works</h2>
      </div>
      <div className="portfolio-sec">
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-climaxthemes-kata-free-language-school-2021-02-03-20_26_24.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="/img/portfolio/screencapture-architect-abolfazlmahjoobravesh-ir-home-architect-2020-09-02-14_27_04.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-boutique-abolfazlmahjoobravesh-ir-home-boutique-2020-09-02-14_27_29.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-cryptocoin-abolfazlmahjoobravesh-ir-2020-09-10-09_47_56.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-cryptocoin-abolfazlmahjoobravesh-ir-index-php-home-2-2020-09-10-09_54_21.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-deeptem-corporate-2020-11-03-07_53_50.png"
            alt="portfolio"
          />
        </div>
        <div className="portfolio">
          <img
            src="./img/portfolio/screencapture-gym-abolfazlmahjoobravesh-ir-2020-09-02-14_28_33.png"
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
