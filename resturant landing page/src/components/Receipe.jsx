import React from "react";
import { recipes } from "../Data";

const Receipe = () => {
  return (
    <div className="section" id="receipe">
      <div className="flex flex-col items-center">
        <div className=" text-3xl text-center font-bold mb-10">
          Hot Selling Receipes
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
        {recipes.map((receipe) => {
          return (
            <div
              className="p-4 shadow-lg hover:shadow transition-all duration-300 "
              key={receipe.id}
            >
              <img src={receipe.image} alt="" className=" rounded-lg mb-4" />
              <div className="flex items-center justify-between mb-4 ">
                <div className="md:text-xl text-[1.2rem] font-semibold">
                  {receipe.name}
                </div>
                <div className=" flex items-center gap-3">
                  <button>-</button>
                  <span className="text-[0.85rem]">2</span>
                  <button>+</button>
                </div>
              </div>
              <p className=" text-[0.85rem] opacity-70 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, esse deserunt? Nisi ab qui omnis exercitationem! Eos
                harum sunt at!
              </p>
              <div className="flex items-center justify-between">
                <span>{receipe.price}</span>
                <span className="btn cursor-pointer">Add to cart</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Receipe;
