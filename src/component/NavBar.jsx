import gsap from "gsap/gsap-core";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  const tab = useRef();
  const [array, setArray] = useState([]);
  const [open, setOpen] = useState("true");

  useEffect(() => {
    setArray(tab.current.childNodes);
  }, []);

  const removeClass = () => {
    array.forEach((e) => {
      e.className = "";
    });
  };

  const linkCursor = () => {
    gsap.to(".cursor", {
      background: "url(/img/cursor/hand-cursor.png)",
    });
  };
  const defaultCursor = () => {
    gsap.to(".cursor", {
      background: "url(/img/cursor/cursor.png)",
    });
  };

  const openFunc = () => {
    gsap.set(".mr-nav", {
      opacity: 0,
      y: -50,
    });
    gsap.to(".mr-nav", 0.1, {
      opacity: 1,
      display: "flex",
      y: 0,
    });
    setOpen(false);
  };

  const closeFunc = () => {
    gsap.to(".mr-nav", 0.1, {
      opacity: 0,
      display: "none",
      // y: -50
    });
    setOpen(true);
  };

  const clickNav = (e, target) => {
    removeClass();
    history.push(e);
    target.className = "active";
    closeFunc();
  };

  return (
    <nav>
      {open ? (
        <button onClick={openFunc}>
          <i className="fa fa-bars" />
        </button>
      ) : (
        <button onClick={closeFunc}>
          <i className="fa fa-times" />
        </button>
      )}
      {/* <button onClick={openFunc}>
        <i className="fa fa-bars" />
      </button> */}
      <div
        onMouseMove={linkCursor}
        onMouseLeave={defaultCursor}
        ref={tab}
        className="mr-nav"
      >
        <button
          className="active"
          onClick={(e) => {
            if (e.target.localName === "button") {
              clickNav("/", e.target);
            } else clickNav("/", e.target.parentElement);
          }}
        >
          <i className="fa fa-home"></i>
          <span>home</span>
        </button>
        <button
          onClick={(e) => {
            if (e.target.localName === "button") {
              clickNav("/about", e.target);
            } else clickNav("/about", e.target.parentElement);
          }}
        >
          <i className="fa fa-address-card"></i>
          <span>about</span>
        </button>
        <button
          onClick={(e) => {
            if (e.target.localName === "button") {
              clickNav("/portfolio", e.target);
            } else clickNav("/portfolio", e.target.parentElement);
          }}
        >
          <i className="fa fa-briefcase"></i>
          <span>works</span>
        </button>
        <button
          onClick={(e) => {
            if (e.target.localName === "button") {
              clickNav("/resume", e.target);
            } else clickNav("/resume", e.target.parentElement);
          }}
        >
          <i className="fa fa-file"></i>
          <span>resume</span>
        </button>
        {/* <button
          onClick={(e) => {
            if (e.target.localName === "button") {
              clickNav("/contact", e.target);
            } else clickNav("/contact", e.target.parentElement);
          }}
        >
          <i className="fa fa-envelope-open"></i>
          <span>contact</span>
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
