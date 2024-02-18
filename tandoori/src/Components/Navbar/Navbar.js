import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon1 } from "../../Icons";
import { HomeIcon } from "../../Icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-wrap justify-between m-5 p-10 font-comfortaa text-xl relative align-middle items-center">
      <section className="">
        <Link to="/">
          <button className="text-2xl font-extrabold p-2"><HomeIcon /></button>
        </Link>
      </section>

      <section className="hidden md:flex flex-wrap gap-10 font-bold ">
        <Link to="/About">
          <button className="p-2">About us</button>
        </Link>
        <Link to="/Contact">
          <button className="p-2">Contact</button>
        </Link>
        <Link to="/Order">
          <button className="bg-black p-2 rounded-lg text-white">Order now</button>
        </Link>
      </section>

      <div className="md:hidden absolute top-16 right-5 z-50 items-center">
        <button className="text-2xl" onClick={toggleMenu}>
          <Icon1 />
        </button>
        {showMenu && (
          <div className="bg-white flex flex-col gap-4 font-bold absolute top-16 right-5 z-40">
            <Link to="/About">
              <button className="p-2">About us</button>
            </Link>
            <Link to="/Contact">
              <button className="p-2">Contact</button>
            </Link>
            <Link to="/Order">
              <button className="bg-black p-2 rounded-lg text-white">Order now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
