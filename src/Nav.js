import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Ffreepngimages.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fnetflix-logo.png%3Ffit%3D624%252C390&f=1&nofb=1"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsmiley-face-3%2F48%2F2-512.png&f=1&nofb=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
