"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";

const page = () => {
  const [user, setUser] = useState("Siddhanth");
  const [edit, setedit] = useState("Gupta");
  return (
    <>
      <Header user={user} edit={edit} />
      <div>page</div>
    </>
  );
};

export default page;

// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const groom = "salmon";
//   const bride = "kat";
//   let marks = 80;
//   const changeMarks = () => {
//     console.log(marks);
//     marks = 33;
//     console.log(marks);
//   };

//   react usestate and variables to declare in react
//   const [marks, setMarks] = useState(60);

//   return (
//     fragments tags <></>
//     <>
//       <h1 className=" font-bold text-4xl ">hello hi {marks}</h1>
//       <button
//         onClick={() => {
//           setMarks(33);
//         }}
//         className=" bg-orange-600 px-5 py-2 rounded mt-5 mx-3 text-white font-bold"
//       >
//         Update
//       </button>
//     </>
//   );
// };

// export default page;
