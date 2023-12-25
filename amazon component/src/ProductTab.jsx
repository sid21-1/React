import React from "react";
import Product from "./Product";

const ProductTab = () => {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      
      <Product title="Logitech" idx={0} />
      <Product title="Apple" idx={1} />
      <Product title="Zebrozics" idx={2} />
      <Product title="Dell" idx={3} />
    </div>
  );
};

export default ProductTab;
