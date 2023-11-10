"use client";
import React from "react";

const page = () => {
  const groom = "salmon";
  const bride = "kat";
  let marks = 80;
  const changeMarks = () => {
    console.log(marks);
    marks = 33;
    console.log(marks);
  };

  return (
    // fragments tags <></>
    <>
      <h1 className=" font-bold text-4xl ">hello hi {marks}</h1>
      <button
        onClick={() => {
          changeMarks();
        }}
        className=" bg-orange-600 px-5 py-2 rounded mt-5 mx-3 text-white font-bold"
      >
        Update
      </button>
    </>
  );
};

export default page;
