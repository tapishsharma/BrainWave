import React from "react";
import { Link } from "react-router-dom";
import headerPNG from "../assets/images/header.png";

function Header() {
  return (
    <div className="header-component-root">
      <div className="bg-div">
        <Link to="/">
          <img className="header-logo-png" src={headerPNG} alt="header" />
          <span className="header-title"> BrainWave </span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="#pricing">
                <span className="header-li-link header-li-link-pricing">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link to="#services-provided">
                <span className="header-li-link">Services</span>
              </Link>
            </li>
            <li>
              <Link className="header-signup-btn" to="/register">
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
