import React, { useReducer } from "react";

const UseReducer = () => {
  const [state, dispatch] = useReducer(first, second, third);

  return <div>Reducer</div>;
};

export default UseReducer;
