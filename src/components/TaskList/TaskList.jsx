import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto  flex items-center justify-start gap-10 flex-nowrap w-full py-5 mt-10'>
        <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-base'>25 may 2025</h4>
            </div>
              <h2 className='mt-3 text-xl font-semibold'>make a youtube vodeo</h2>
              <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste numquam enim pariatur molestiae praesentium amet.</p>
        </div>
        {/* <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div>
         <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div>
          <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div>
           <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div>
            <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div>
             <div className=' flex-shrink-0 h-full w-[200px] bg-yellow-400 rounded-xl'></div> */}
      
    </div>
    
  )
}

export default TaskList
