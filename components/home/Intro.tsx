import { motion } from 'framer-motion'
import React, { FC } from 'react'
import StackList from './StackList'
import Link from 'next/link'

const Intro: FC = () => {
  return (
    <section className='h-screen w-screen max-h-screen min-h-screen text-left flex flex-col justify-center items-center overflow-x-hidden'>
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
        <div className='mt-6 flex justify-center items-center'>
          <Link href='mailto:siamekanto360@gmail.com'>
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              whileTap={{ scale: 0.95 }}
              className='h-11 bg-blue-600 rounded-lg shadow font-medium px-8 flex justify-between items-center gap-3 hover:bg-blue-700'
            >
              <EmailIcon />
              Contact Me
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const EmailIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
      />
    </svg>
  )
}

export default Intro
