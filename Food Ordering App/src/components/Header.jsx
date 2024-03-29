import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-49146.jpg?size=626&ext=jpg"
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
