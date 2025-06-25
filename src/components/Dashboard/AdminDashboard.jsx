import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header firstName={props.data?.FirstName} changeUser={props.changeUser} />
            <CreateTask data={props.data}/>
            <AllTask data={props.data}/>
         
        </div>
    )
}

export default AdminDashboard
