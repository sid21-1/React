import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("sid");

  const handleNameChange = (event) => {
    setFullName(event.target.value)
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={handleNameChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;