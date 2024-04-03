import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{name} Gupta</h1>
      <h2>Count = {count}</h2>
      <h3>Location : Darjeeling </h3>
      <h4>Contact: sid</h4>
    </div>
  );
};

export default User;
