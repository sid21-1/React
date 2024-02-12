import React from "react";

const Featured = () => {
  return (
    <div className=" w-full py-20  ">
      <div className="w-full px-20 border-b-[1px]   border-zinc-800 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative rounded-xl w-1/2 h-[75vh]  ">
            <h1 className=" absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#cdea68] z-[9] text-8xl font-semibold leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className=" card w-full h-full  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardContainer relative rounded-xl w-1/2 h-[75vh]  ">
            <h1 className=" absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#cdea68] z-[9] text-8xl font-semibold leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className=" card w-full h-full  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
