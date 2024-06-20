import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, } from "framer-motion";
import Switch from "./Switch";

const Base = ({
  selectedBase,
  setSelectedBase,
  mode,
  isActive,
  handleActive,
}) => {
  const [base, setBase] = useState(["Classic", "Thick Crust", "Thin & Crispy"]);

  const handleBaseSelection = (item) => {
    setSelectedBase(item);
  };

  const handleReset = () => {
    setSelectedBase(!selectedBase);
  };

  const handleBaseCheck = () => {
    if (selectedBase === "") {
      alert("Select a base...");
    }
  };

  return (
    <>
      <Switch mode={mode} isActive={isActive} handleActive={handleActive} />
      <div
        className={`container  flex flex-col justify-center items-center font-[poppins] max-[380px]:h-[36.7rem] max-[430px]:h-[51.1rem] max-[450px]:h-[53.2rem] md:max-lg:h-[57.5rem]  lg:h-[40.4rem] xl:max-2xl:max-w-full xl:max-2xl:h-screen ${mode === "Dark" && "bg-[#151515]"
          }`}
      >
        <div className="content h-[50rem] w-[23rem] lg:w-[20rem] lg:h-[20rem] flex flex-col justify-center items-center space-y-4   xl:max-2xl:w-[30rem] xl:max-2xl:h-[28rem]">
          <motion.div
            className="content  text-white text-2xl font-medium p-2 border-b-2 border-white xl:max-2xl:text-[2.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            Choose Your Base
          </motion.div>
          <motion.div
            className=" p-2  h-[10rem] w-[12rem] flex flex-col  xl:max-2xl:w-[20rem] xl:max-2xl:h-[15rem] justify-center items-center gap-5 xl:max-2xl:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            {base.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                key={index}
                className={`text-white   list-none text-2xl font-medium cursor-pointer xl:max-2xl:text-[2rem] ${selectedBase === item
                  ? "text-red-800 md:max-lg:text-red-800 max-sm:text-red-700 lg:text-red-800 font-semibold "
                  : ""
                  }`}
                onClick={() => handleBaseSelection(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.div>

          {selectedBase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5 }}
              className="flex"
            >
              {/* <button
              onClick={handleReset}
              className="border-white border-2 rounded-xl w-[15rem] p-2 text-white font-medium cursor-pointer bg-[#91CC4C] text-2xl text-center lg:hover:bg-[#6b9838]"
            >
              Reset
            </button> */}
              <Link
                to={selectedBase === "" ? "" : "/toppings"}
                className=" border-white border-2 rounded-xl w-[15rem] p-2 text-white font-medium cursor-pointer bg-[#91CC4C] text-2xl text-center xl:max-2xl:text-[2.5rem] xl:max-2xl:p-3 xl:max-2xl:w-[20rem] hover:bg-[#6b9838]"
                onClick={handleBaseCheck}
              >
                Next
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Base;
