import { motion } from 'framer-motion'
import React, { FC } from 'react'
import StackList from './StackList'

const Intro: FC = () => {
  return (
    <section className='h-screen w-screen text-left flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='w-10/12 md:w-2/3 mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-4xl lg:text-6xl font-bold font-pop'
        >
          👋 Hi, I'm Siam
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className='mt-4 lg:mt-6 text-lg lg:text-2xl font-inter font-light'
        >
          Web Developer from Bangladesh.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className='mt-2 lg:mt-3 text-lg lg:text-2xl font-inter font-light'
        >
          I love to build Beautiful and Clean Websites and Web Apps.
        </motion.h2>
        <StackList />
      </div>
    </section>
  )
}

export default Intro
