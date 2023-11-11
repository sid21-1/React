import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className=" px-3 h-8 text-white bg-red-500 flex items-center  justify-between">
        <h2>LOGO</h2>
        <div className="flex gap-4">
          <Link href="/About" className="px-2">
            About
          </Link>
          <Link href="/ContactSection" className="px-2">
            Contact Section
          </Link>
          <Link href="/Home" className="px-2">
            Home
          </Link>
          <Link href="/Section" className="px-2">
            Section
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
