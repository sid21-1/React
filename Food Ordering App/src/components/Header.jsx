import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [button, setButton] = useState("Login");
  // console.log("rendered");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-[#f3f4e5] shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status{onlineStatus ? " yes" : " no"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              button === "Login" ? setButton("Logout") : setButton("Login");
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
