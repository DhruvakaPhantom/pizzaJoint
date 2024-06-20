import React from 'react'
import { delay, motion } from 'framer-motion'

const Loader = () => {

    const loaderVar = {
        animationOne: {
            y: [0, -30],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.2,
                    repeatType: "reverse",
                    ease: "easeOut"
                }
            }
        },
        animationTwo: {
            y: [0, -30],
            transition: {
                y: {
                    repeat: Infinity,
                    delay: 0.6,
                    duration: 0.5,
                    repeatType: "reverse",
                    ease: "easeOut"
                }
            }
        },
        animationThree: {
            y: [0, -30],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.8,
                    repeatType: "reverse",
                    ease: "easeOut"
                }
            }
        }
    }

    return (
        <>
            <div className='flex w-16 justify-between'>
                <motion.div className='loader bg-white relative h-2 w-2 rounded-full top-20  lg:max-xl:top-8 xl:max-2xl:top-4'
                    animate="animationOne" variants={loaderVar}></motion.div>
                <motion.div className='loader bg-white relative h-2 w-2 rounded-full top-20  lg:max-xl:top-8 xl:max-2xl:top-4'
                    animate="animationTwo" variants={loaderVar}></motion.div>
                <motion.div className='loader bg-white relative h-2 w-2 rounded-full top-20  lg:max-xl:top-8 xl:max-2xl:top-4'
                    animate="animationThree" variants={loaderVar}></motion.div>
            </div>

        </>
    )
}

export default Loader
