import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <div className='animate-spin rounded-full h-5 w-10
        border-4 border-gray-300 border-t-primary'></div>
    </div>
  )
}

export default Loader