import React from "react";
import { mainMenu } from "../Data";
import {RxDashboard} from "react-icons/rx"
import { useState } from "react";
const NavIcon = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className={`${toggle ? "scale-1":"scale-0"} fixed w-full flex justify-center z-20 bottom-8 transition-all duration-300`}>
        <div className="flex sm:gap-8 gap-6 rounded-xl bg-black p-4">
          {mainMenu.map((main) => {
            return (
              <div className="p-2 rounded-full bg-glass" key={main.id}>
                <a href="" className="text-xl  text-white">{main.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
          <div className="fixed right-0 top-[20%] z-20 cursor-pointer bg-black" onClick={()=>{
            setToggle(!toggle)
          }}>
            <RxDashboard className="text-3xl text-white"/>
          </div>
    </>
  );
};

export default NavIcon;
