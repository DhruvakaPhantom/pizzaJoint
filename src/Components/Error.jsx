import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Error = () => {

  return (
    <>
      <div className="text-white font-[poppins]  h-[53.2rem]   flex flex-col justify-center items-center" >
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className=' h-[50rem] w-[23rem] flex flex-col justify-evenly items-center space-y-4 '>
          <div className='flex flex-col justify-center items-center space-y-5'>
            <h2 className='text-3xl font-semibold'>Uh-oh! Pizza Not Found</h2>
            <p className='text-xl text-center'>404 Error: The slice you're looking for has been devoured...</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-5'>
            <h2 className='text-3xl font-semibold'>Enjoy this fun pizza fact:</h2>
            <p className='text-xl text-center'>Did you know? The world's largest pizza was made in Rome in 2012 and measured 13,580.28 square feet!</p>
          </div>
          <a href="/" className='border-white border-2 rounded-xl w-[15rem] lg:w-[22rem]  lg:text-[2rem] lg:p-6 p-2 text-white font-medium cursor-pointer bg-[#91CC4C] text-2xl text-center lg:hover:bg-[#6b9838]'>Go Home</a>
        </motion.div>
      </div>
    </>
  )
}

export default Error
