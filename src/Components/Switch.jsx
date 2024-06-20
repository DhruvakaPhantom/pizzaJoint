import React, { useState } from "react";
import { motion } from "framer-motion";

const Switch = ({ isActive, handleActive, mode }) => {
  return (
    <div
      className={`${mode === "Dark" && "bg-[#151515]"
        } flex justify-end pr-3 p-2 items-center  md:max-lg:top-28 lg:top-32 xl:max-2xl:top-36  lg:pr-8 md:pr-5 absolute top-20 right-0`}
    >
      <label
        className="inline-flex items-center "

      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleActive}
          checked={isActive}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none cursor-pointer"></div>
        <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300 font-[poppins]">
          {mode}
        </span>
      </label>
    </div>
  );
};

export default Switch;
