import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure  mt-40 px-20">
        {["We Create", "Eye-Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-[7.5vw] tracking-tighter  leading-[6.5vw]  font-medium">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800  mt-24 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight  leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm  uppercase">
            start the project
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
