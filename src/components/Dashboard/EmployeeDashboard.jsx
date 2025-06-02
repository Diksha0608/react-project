import React from 'react'
import Header from '../others/Header'
import NumberOfTask from '../others/NumberOfTask'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen '>
            <Header />
            <NumberOfTask />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard
