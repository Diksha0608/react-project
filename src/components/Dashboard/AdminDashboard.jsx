import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data,changeUser}) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header firstName={data?.FirstName} changeUser={changeUser} />
            <CreateTask data={data}/>
            <AllTask data={data}/>
         
        </div>
    )
}

export default AdminDashboard
