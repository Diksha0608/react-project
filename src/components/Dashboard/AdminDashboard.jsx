import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data,changeUser}) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header firstName={data?.firstName} changeUser={changeUser} />
            <CreateTask/>
            <AllTask/>
         
        </div>
    )
}

export default AdminDashboard
