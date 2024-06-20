import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Switch from "./Switch";

const Order = ({
  selectedBase,
  selectedToppings,
  mode,
  isActive,
  handleActive,
  setShowModal
}) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)

    }, 5000)

  }, [setShowModal])
  return (
    <>
      <Switch mode={mode} isActive={isActive} handleActive={handleActive} />
      <div
        className={`container max-[380px]:h-[36.7rem] max-[420px]:h-[51.1rem] max-[450px]:h-[53.2rem] md:max-lg:h-[57.5rem]  lg:h-[40.4rem] flex flex-col justify-center items-center font-[poppins] xl:max-2xl:max-w-full xl:max-2xl:h-screen  ${mode === "Dark" && "bg-[#151515] "
          }`}
      >
        <div className="content h-[50rem] w-[23rem]  flex flex-col justify-center items-center space-y-4 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="content  text-white text-2xl text-center  font-medium p-2 border-b-2 border-white"
          >
            Thank You For Your Order
          </motion.div>
          <div className="p-2 h-fit w-[20rem] text-2xl text-white font-medium   flex flex-col justify-center items-center  ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className=" h-fit w-[22rem]  flex  flex-col gap-1 justify-center items-center"
            >
              You ordered a
              <span className="text-yellow-300 font-medium ">
                &nbsp;{selectedBase}&nbsp;
              </span>
              pizza with&nbsp;
              {selectedToppings.map((topping, index) => (
                <span key={index} className="text-yellow-300 font-medium ">
                  &nbsp;{topping}&nbsp;
                </span>
              ))}
              toppings.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
