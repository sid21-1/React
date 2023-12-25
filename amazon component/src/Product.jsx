import React from "react";
import "./Product.css";
import Price from "./Price";

const Product = ({ title ,idx }) => {
  let oldPrices = ["12,34", "223", "432", "213"];
  let newPrices = ["455", "666", "437772", "2343225"];
  let description = [
    ["a" , "z"],
   ["b", "x"], 
   ["c","y"], 
   ["d", "w"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
};

export default Product;
