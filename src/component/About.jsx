// import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Works from "./Works";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Works from "./Works";

const About = () => {
  const domain = useRef();
  const [domainName, setDomainName] = useState();

  useEffect(() => {
    let lastNum = domain.current.baseURI.lastIndexOf("/");
    let firstNum = domain.current.baseURI.indexOf("/");
    let name = `${domain.current.baseURI.slice(firstNum + 2, lastNum)}`;
    setDomainName(name);
  });
  return (
    <div ref={domain} className="mr-about pages">
      <Helmet>
        <title>abolfazl | About</title>
      </Helmet>
      <div className="title">
        <h2 className="name">abolfazl</h2>
        <h2 className="family">mahjoob</h2>
      </div>
      <div className="mr-sec-about">
        <div className="describtion">
          <div className="head">
            <div className="mr-work">
              <h5>I'm abolfazl and</h5>
              <h4 className="mr-works">
                <div>
                  <Works />
                  {/* <div>developer</div>
                  <div>designer</div>
                  <div>freelancer</div> */}
                </div>
              </h4>
            </div>
          </div>
          <p className="txt">
            Hi! My name is abolfazl mahjoob. I am a Web Developer, and I'm very
            passionate and dedicated to my work. I have acquired the skills and
            knowledge necessary to make your project a success. I enjoy every
            step of the design process, from discussion and collaboration from
            discussion and collaboration.
          </p>
        </div>
        <div className="detail">
          <div>
            <h6>Birthday:</h6>
            <p>09.10.1999</p>
          </div>
          <div>
            <h6>Age:</h6>
            <p>21</p>
          </div>
          <div>
            <h6>Email:</h6>
            <p>abolfazlmahjoobravesh@yahoo.com</p>
          </div>
          <div>
            <h6>Website:</h6>
            <p>{domainName}</p>
          </div>
        </div>
      </div>
      <div className="mr-doing">
        <div className="mr-title">What I Do</div>
        <div className="icon-boxs">
          <div className="icon-box">
            <div className="icon">
              <i className="fa fa-lightbulb"></i>
            </div>
            <h6 className="title-icon-box">Creative Design</h6>
            <p className="txt-icon-box">That's what you want</p>
          </div>
          <div className="icon-box">
            <div className="icon">
              <i className="fa fa-laptop-code"></i>
            </div>
            <h6 className="title-icon-box">Web Development</h6>
            <p className="txt-icon-box">That's what you need</p>
          </div>
          <div className="icon-box">
            <div className="icon">
              <i className="fa fa-briefcase"></i>
            </div>
            <h6 className="title-icon-box">Brand Identity</h6>
            <p className="txt-icon-box">That's what you like</p>
          </div>
          <div className="icon-box">
            <div className="icon">
              <i className="fa fa-palette"></i>
            </div>
            <h6 className="title-icon-box">Adobe XD</h6>
            <p className="txt-icon-box">I am what you want</p>
          </div>
        </div>
      </div>
      <div className="mr-interest">
        <div className="mr-title">Interests</div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fa fa-gamepad"></i>
            </div>
            <p className="txt">Playstation</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-book-open"></i>
            </div>
            <p className="txt">Reading</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-suitcase-rolling"></i>
            </div>
            <p className="txt">Traveling</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-keyboard"></i>
            </div>
            <p className="txt">Programming</p>
          </div>
        </div>
      </div>
      <div className="mr-fact">
        <div className="mr-title">Fun Facts</div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fa fa-cookie-bite"></i>
            </div>
            <h6 className="title-icon">50+</h6>
            <p className="txt">Projects Finished</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-smile-beam"></i>
              {/* <i className="fa fa-user-tie"></i> */}
            </div>
            <h6 className="title-icon">5+</h6>
            <p className="txt">Happy Clients</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-award"></i>
            </div>
            <h6 className="title-icon">0</h6>
            <p className="txt">Awards Won</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa fa-star"></i>
            </div>
            <h6 className="title-icon">4.9</h6>
            <p className="txt">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
