import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [showlist, setShowlist] = useState(false);
  return (
    <>
      <div className="Nav">
        <div className="logo">
          <MdFastfood className="logoimg" />
          <h1>My resturant</h1>
        </div>
        <div className="hamburgmenu">
          <a
            href="#"
            onClick={() => {
              setShowlist(!showlist);
            }}
          >
            <GiHamburgerMenu />
          </a>
        </div>
        <div className={showlist ? "nav_list mobile_navlist" : "nav_list"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
