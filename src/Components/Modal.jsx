import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ showModal }) => {
    return (
        <>

            {showModal &&
                (<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='max-[380px]:h-[41.7rem] max-[420px]:h-[56rem] max-[450px]:h-[58.2rem] md:max-lg:h-[64rem] lg:h-[50rem] xl:max-2xl:max-w-full xl:max-2xl:h-screen w-full fixed flex flex-col justify-center items-center  backdrop-blur-[0.2rem] bg-[#151515bd]  z-10  '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                        className='modal flex flex-col bg-[#874CCC] w-[25rem] justify-center items-center h-[20rem] rounded-lg shadow-md space-y-4 max-sm:h-[20rem] max-sm:w-[20rem] xl:max-2xl:h-[25rem] xl:max-2xl:w-[25rem]'>
                        <p className='font-[poppins] text-2xl text-white max-sm:text-[1.2rem]'>Want To Make Another Pizza?</p>
                        <motion.a href='/'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5 }}
                            className=" font-[poppins] bg-[#91CC4C] p-2 text-white font-medium cursor-pointer  border-2 w-[10rem] text-center text-xl rounded-xl hover:bg-[#6b9838] max-sm:w-[10rem]">
                            <button>Start Again</button>
                        </motion.a>
                    </motion.div>
                </motion.div>)}
        </>
    )
}

export default Modal
