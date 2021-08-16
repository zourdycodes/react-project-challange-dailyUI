import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import * as PATH from "../constant/routes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to={PATH.HOME}>
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to={PATH.HOME}>Home</Link>
          </li>
          <li>
            <Link to={PATH.ABOUT}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
