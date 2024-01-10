import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let incCount =()=>{
    setCount(currCount =>currCount+1)
  }

  useEffect(function printSomething (){
    console.log("this is a side-effect")
  })
  return (
    <div>
      <h4>Coutner = {count}</h4>
      <button onClick={incCount}>+1</button>
    </div>
  );
};

export default Counter;
