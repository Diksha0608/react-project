import React from 'react'

const NewTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-base'>25 may 2025</h4>
            </div>
              <h2 className='mt-3 text-2xl font-semibold'>make a youtube video</h2>
              <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste numquam enim pariatur molestiae praesentium amet.</p>
              <div className='mt-4'>
                <button className='bg-amber-600 rounded'>Accept Task</button>
              </div>
        </div>
  )
}

export default NewTask
