import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // const handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // const handleUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    // console.log(newValue);

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          id="fullName"
          onChange={handleInputChange}
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter user name"
          value={formData.userName}
          id="userName"
          onChange={handleInputChange}
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          id="password"
          onChange={handleInputChange}
          name="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
