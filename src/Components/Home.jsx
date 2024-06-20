import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Switch from "./Switch";
import Loader from "./Loader";

const Home = ({ mode, isActive, handleActive }) => {

  return (
    <>

      <div
        className={`container max-[380px]:h-[37rem] max-[420px]:h-[51.5rem] max-[450px]:h-[53.2rem]   md:h-[57.5rem]  max-[850px]:max-w-full lg:h-[40.4rem]  xl:max-2xl:max-w-full xl:max-2xl:h-screen   flex flex-col justify-center items-center font-[poppins] ${mode === "Dark" && "bg-[#151515]"
          }`}

      >
        <motion.div
          className=" h-[50rem] w-[23rem] lg:h-[15rem] lg:w-[50rem] flex flex-col justify-center items-center space-y-8  xl:max-2xl:w-[60rem] xl:max-2xl:h-[20rem] lg:space-y-16  md:max-lg:h-[15rem] md:max-lg:w-[40rem] lg:max-xl:h-[22rem] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}

        >
          <Switch isActive={isActive} handleActive={handleActive} mode={mode} />
          <div className="content  text-white text-2xl font-medium md:max-lg:text-[2.5rem] lg:max-xl:text-[3.5rem] xl:max-2xl:text-[4.5rem] lg:text-[3rem]">
            Welcome To Pizza Joint
          </div>
          <Link
            to="/base"
            className=" border-white border-2 rounded-xl w-[15rem] lg:max-xl:w-[20rem] lg:max-xl:text-3xl lg:max-xl:p-3 p-2 text-white font-medium cursor-pointer bg-[#91CC4C] text-2xl text-center hover:bg-[#6b9838] xl:max-2xl:w-[20rem] xl:max-2xl:text-[2rem] xl:max-2xl:p-4"
          >
            Create Your Pizza
          </Link>
          <Loader />
        </motion.div>

      </div>
    </>
  );
};

export default Home;
