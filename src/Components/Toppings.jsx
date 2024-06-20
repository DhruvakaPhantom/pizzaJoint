import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import { motion } from "framer-motion";

const Toppings = ({
  selectedToppings,
  setSelectedToppings,
  mode,
  isActive,
  handleActive,
}) => {
  const [toppings, setToppings] = useState([
    "Onion",
    "Olive",
    "Pepper",
    "Paneer",
    "Capsicum",
    "Extra Cheese",
  ]);

  const [newToppingsArray, setNewToppingsArray] = useState([
    ...selectedToppings,
  ]);

  const handleToppingsSelection = (item) => {
    if (!newToppingsArray.includes(item)) {
      setNewToppingsArray([...newToppingsArray, item]);
    } else {
      setNewToppingsArray(
        newToppingsArray.filter((topping) => topping !== item)
      );
    }
  };

  const handleReset = () => {
    setNewToppingsArray([]);
  };

  const handleToppingsCheck = () => {
    if (newToppingsArray.length === 0) {
      alert("Select some toppings...");
    } else {
      setSelectedToppings(newToppingsArray);
    }
  };

  return (
    <>
      <Switch mode={mode} isActive={isActive} handleActive={handleActive} />
      <div
        className={`container max-[380px]:h-[36.7rem] max-[420px]:h-[51.1rem] max-[450px]:h-[53.2rem] md:max-lg:h-[57.5rem]  lg:h-[40.4rem] xl:max-2xl:max-w-full xl:max-2xl:h-screen flex flex-col justify-center items-center font-[poppins]   ${mode === "Dark" && "bg-[#151515]"
          } `}
      >
        <div className="content h-[50rem] w-[23rem]   flex flex-col justify-center items-center space-y-4 xl:max-2xl:w-[40rem] xl:max-2xl:h-[29rem] ">
          <motion.div
            className="content xl:max-2xl:text-[2.5rem] text-white text-2xl font-medium  p-2 border-b-2 border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            Choose Your Toppings
          </motion.div>
          <motion.div
            className=" p-2 h-[18rem] w-[20rem] xl:max-2xl:w-[30rem] xl:max-2xl:h-[15rem] flex flex-col justify-center gap-4 items-center xl:max-2xl:grid xl:max-2xl:grid-cols-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            {toppings.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                key={index}
                className={`text-white list-none text-2xl font-medium cursor-pointer  xl:max-2xl:w-[15rem] xl:max-2xl:text-center xl:max-2xl:text-[2rem]  ${newToppingsArray.includes(item)
                  ? "text-red-800 md:max-lg:text-red-800 max-sm:text-red-700 font-semibold lg:text-red-800"
                  : ""
                  }`}
                onClick={() => handleToppingsSelection(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.div>
          {newToppingsArray.length > 0 && (
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
                to={newToppingsArray.length === 0 ? "" : "/order"}
                className=" border-white border-2 rounded-xl w-[15rem] p-2 text-white font-medium cursor-pointer bg-[#91CC4C] text-2xl text-center lg:hover:bg-[#6b9838] xl:max-2xl:text-[2.5rem] xl:max-2xl:p-3 xl:max-2xl:w-[20rem]"
                onClick={handleToppingsCheck}
              >
                Order
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Toppings;
