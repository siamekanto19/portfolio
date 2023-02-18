import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import React from 'react'

const DATA = [
  {
    id: nanoid(),
    src: '/img/react.png',
  },
  {
    id: nanoid(),
    src: '/img/vue.png',
  },
  {
    id: nanoid(),
    src: '/img/svelte.png',
  },
  {
    id: nanoid(),
    src: '/img/nuxt.svg',
  },
  {
    id: nanoid(),
    src: '/img/graphql.png',
  },
  {
    id: nanoid(),
    src: '/img/strapi.svg',
  },
]

export default function StackList() {
  return (
    <div className='mt-8 w-10/12 md:w-2/3 mx-auto flex items-center justify-center gap-6 lg:gap-8'>
      {DATA.map((tool, index) => (
        <motion.img
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: index === 0 ? 2 : 2 + index * 0.3,
            duration: 0.3,
          }}
          className='w-8'
          key={tool.id}
          src={tool.src}
          alt=''
        />
      ))}
    </div>
  )
}
