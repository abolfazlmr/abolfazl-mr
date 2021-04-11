import React from "react";
import { Helmet } from "react-helmet";
import Button from "./Button";
import RowHistory from "./resume/RowHistory";
import Skill from "./resume/Skill";

const Resume = () => {
  return (
    <div className="mr-reume pages">
      <Helmet>
        <title>abolfazl | Resume</title>
      </Helmet>
      <div className="title">
        <h2>Working </h2>
        <h2>Process</h2>
      </div>
      <div className="history-work">
        <RowHistory>
          <div>2020 - current</div>
          <div>desing page with elementor, WORDPRESS</div>
          <div>i worked in strong team 'wbnus' as a designer and My job has been to design pages with 'elementor' </div>
        </RowHistory>
      </div>
      <div className="mr-btn">
        <Button />
      </div>
      <div className="skills-section">
        <div className="mr-title">Programming Skills</div>
        <div className="skills">
          <Skill percent="half-eight" data="85">javascript</Skill>
          <Skill percent="eight" data="80">react.js</Skill>
          <Skill percent="eight" data="80">jquery</Skill>
          <Skill percent="nine" data="95">html & css</Skill>
          <Skill percent="six" data="65">bootstrap</Skill>
          <Skill percent="seven" data="75">sass</Skill>
          <Skill percent="half-eight" data="85">wordpress</Skill>
        </div>
      </div>
    </div>
  );
};

export default Resume;
