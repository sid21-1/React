import React from "react";
import { motion } from "framer-motion";
export const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className=" w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-semibold uppercase   pt-3 pr-20"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-semibold uppercase   pt-3 pr-20"
        >
          {" "}
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};
