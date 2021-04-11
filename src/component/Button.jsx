import React from "react";
import { gsap } from "gsap";

const Button = () => {
  const linkCursor = () => {
    gsap.set(".cursor", {
      background:
      "url(/img/cursor/hand-cursor.png)",
    });
  };
  const defaultCursor = () => {
    gsap.set(".cursor", {
      background:
      "url(/img/cursor/cursor.png)",
    });
  };

  return (
    <a download href="./img/screencapture-localhost-3000-resume-2021-03-11-02_54_39.png" onMouseMove={linkCursor} onMouseLeave={defaultCursor}>
      <span> DOWNLOAD CV </span>
    </a>
  );
};

export default Button;
