import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo-addict-coder" />
          <button
            className="nav-toggle"
            onClick={() => setToggleShow((toggleShow) => !toggleShow)}
          >
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${toggleShow && "show-container"}`}>
          <ul className="links">
            {links?.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social?.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}>{icon.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
