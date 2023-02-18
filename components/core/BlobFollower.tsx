import React, { Fragment, useEffect, useRef } from 'react'

const BlobFollower = () => {
  useEffect(() => {
    document.body.onpointermove = (event) => {
      const blobRef = document.getElementById('blob') as HTMLElement
      blobRef.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
        { duration: 300, fill: 'forwards' }
      )
    }
    return () => {}
  }, [])
  return (
    <Fragment>
      <div
        id='blob'
        className='w-72 h-72 z-10 lg:block rounded-full bg-gradient-to-br from-blue-600 to-purple-600 absolute opacity-60 animate-rotate hidden'
      ></div>
      <div
        id='blob-static'
        className='w-64 h-64 z-10 block lg:hidden top-[20%] left-[20%] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 absolute opacity-60'
      ></div>
      <div className='h-full w-full absolute z-10 backdrop-blur-[10vmax]'></div>
    </Fragment>
  )
}

export default BlobFollower
