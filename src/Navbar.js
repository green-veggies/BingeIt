import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow, false);
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="7eaf49191bc98d9f3cb80edf484ce2cb.png"
        alt="BingeIt logo"
      />
      <img className="nav_user" src="Netflix-avatar.png" alt="BingeIt user" />
    </div>
  );
}

export default Navbar;
