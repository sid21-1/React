import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Me</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
