import React from "react";

const About = () => {
  return (
    <div className="p-20 w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.6vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, explain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full mt-20 pt-10  border-t-[1px] border-[#a1b562] flex gap-5">
        <div className="w-1/2">
          <h1 className=" text-5xl">Our approach :</h1>
          <button className="px-6 py-4 bg-zinc-900 mt-10 flex gap-10 items-center rounded-full text-white uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#596337] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
