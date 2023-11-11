import React from "react";
const Header = (props) => {
  console.log(props);
  return (
    <>
      <div className=" px-3 h-8 bg-green-500 flex items-center  justify-between">
        <h2>{props.user}</h2>
        <div className="flex gap-4">
          <h4>About</h4>
          <h4>Home</h4>
          <h4>Contact Us</h4>
          <h4>{props.edit}</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
