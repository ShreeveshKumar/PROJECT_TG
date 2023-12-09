import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav_bar">
      <section className="nav_bar1">
        <Link to="/">
          <button className="nav_element1">Tandoori Gali</button>
        </Link>
      </section>
      <button className="hamburger_icon" onClick={handleMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <section className={`nav_bar2 ${showMenu ? "active" : ""}`}>
        <Link to="/About">
          <button className="nav_element3">About us</button>
        </Link>
        <Link to="/Contact">
          <button className="nav_element4">Contact</button>
        </Link>
        <Link to="/Order">
          <button className="nav_element5">Order now</button>
        </Link>
      </section>
    </div>
  );
};


export default Navbar;
