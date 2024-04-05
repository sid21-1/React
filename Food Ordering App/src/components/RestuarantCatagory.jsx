import React, { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCatagory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 m-auto my-4 bg-gray-300 shadow-md text-center p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          {/* <span>⬇</span> */}
          <span>⬇️</span>
        </div>

        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestuarantCatagory;
