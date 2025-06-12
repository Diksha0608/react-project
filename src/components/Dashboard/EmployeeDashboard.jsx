import React from 'react'
import Header from '../others/Header'
import NumberOfTask from '../others/NumberOfTask'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, changeUser }) => {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen '>
            <Header firstName={data?.FirstName} changeUser={changeUser} />
            <NumberOfTask data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard
