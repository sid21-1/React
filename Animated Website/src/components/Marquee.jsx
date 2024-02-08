import React from "react";
import { motion } from "framer-motion";
export const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="  text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none font-semibold uppercase   pt-3"
        >
          We are Ochi
        </h1>
        <h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none font-semibold uppercase   pt-3"
        >
          {" "}
          We are Ochi
        </h1>
      </div>
    </div>
  );
};
