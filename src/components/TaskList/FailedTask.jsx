import React from 'react'

const FailedTask = ({data}) => {
  return (
       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-base'>{data.taskDate}</h4>
            </div>
              <h2 className='mt-3 text-2xl font-semibold'>{data.taskTitle}</h2>
              <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='m-2'>
            <button className='w-full '>Failed</button>
        </div>
        </div>
  )
}

export default FailedTask
