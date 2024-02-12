import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className=" cardContainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </button>
        </div>
      </div>
      <div className=" cardContainer flex gap-5 w-1/2 h-[50vh] ">
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#19312e]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </button>
        </div>
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#19312e]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
