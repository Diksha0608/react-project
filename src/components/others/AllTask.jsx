import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <div className='bg-[#1c1c1c] rounded p-4 mt-5 h-40 overflow-auto '>
      <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
      <h3 className='w-1/5 bg-red-600'>New Task</h3>
      <h2 className='w-1/5 bg-red-600'>Active Task</h2>
      <h3 className='w-1/5 bg-red-600'>Completed</h3>
      <h3 className='w-1/5 bg-red-600'>Failed</h3>
      {authData.employees.map(function (elem) {
        return <div className='bg-red-400 mb-2  py-2 px-4 flex rounded justify-between'>
          <h2 className='w-1/5 bg-red-600'>{elem.FirstName}</h2>
          <h3 className='w-1/5 bg-red-600'>Make a UI Design</h3>
          <h2 className='w-1/5 bg-red-600'>Status</h2>
          <h3 className='w-1/5 bg-red-600'>Make a UI Design</h3>
          <h3 className='w-1/5 bg-red-600'>Failed</h3>

        </div>

      })}

    </div>
  )
}

export default AllTask
