import React from 'react'

const NewTask = (props) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{props.data.category}</h3>
                <h4 className='text-base'>{props.data.date}</h4>
            </div>
              <h2 className='mt-3 text-2xl font-semibold'>{props.data.taskTitle}</h2>
              <p className='text-sm mt-2'> {props.data.taskDescription}</p>
              <div className='mt-4'>
                <button className='bg-amber-600 rounded w-full'>Accept Task</button>
              </div>
        </div>
  )
}

export default NewTask
