import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <div className='bg-[#1c1c1c] rounded p-4 mt-5'>
      <div className='bg-red-400 mb-2  py-2 px-4 flex rounded justify-between'>
          <h2 className=' text-lg font-medium w-1/5'>EMployee Name</h2>
          <h3 className=' text-lg font-medium w-1/5'>New Task</h3>
          <h2 className=' text-lg font-medium w-1/5'>Active Task</h2>
          <h3 className=' text-lg font-medium w-1/5'>Completed</h3>
          <h3 className=' text-lg font-medium w-1/5'>Failed</h3>

        </div>
 <div>
       {authData.employees.map(function (elem,idx) {
        return <div key={idx} className=' border-2 border-emerald-500 mb-2  py-2 px-4 flex rounded justify-between'>
          <h2 className=' text-lg font-medium w-1/5'>{elem.FirstName}</h2>
          <h3 className=' text-lg font-medium w-1/5 !text-blue-600'>{elem.taskCounts.newTask}</h3>
          <h2 className=' text-lg font-medium w-1/5 !text-yellow-400'>{elem.taskCounts.active}</h2>
          <h3 className=' text-lg font-medium w-1/5 !text-white'>{elem.taskCounts.completed}</h3>
          <h3 className=' text-lg font-medium w-1/5 !text-red-600'>{elem.taskCounts.failed}</h3>

        </div>

      })}
 </div>

    </div>
  )
}

export default AllTask
