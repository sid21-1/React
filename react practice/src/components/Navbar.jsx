import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Contact us",
    },
  ];
  return (
    <div className="flex justify-between px-4 items-center w-full fixed bg-black text-white h-20">
      <h1 className="font-signature text-3xl font-bold cursor-pointer">
        Siddhanth
      </h1>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            className="capitalize font-medium text-gray-300 hover:scale-105 px-4 cursor-pointer duration-200"
            key={link.id}
          >
            {link.link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className=" cursor-pointer pr-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center text-blue-600 items-center absolute top-0 left-0 w-full h-screen bg-orange-700">
          {links.map((link) => (
            <li
              className="px-4 cursor-pointer capitalize py-5 text-4xl"
              key={link.id}
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
