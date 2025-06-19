import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {


  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <div className='bg-[#1c1c1c] rounded p-4 mt-5 h-40 overflow-auto '>

      {authData.employees.map(function(elem){
        return    <div className='bg-red-400 mb-2  py-2 px-4 flex rounded justify-between'>
            <h2>{elem.FirstName}</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        
      })}
      
    </div>
  )
}

export default AllTask
