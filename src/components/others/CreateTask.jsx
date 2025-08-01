import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

 const submitHandler = (e) => {
    e.preventDefault();

    const task = {
        taskTitle,
        taskDate,
        taskDescription,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    };

    // Get employees data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Find the employee by first name and add the new task
    const updatedEmployees = employees.map((employee) => {
        if (employee.FirstName === assignTo) {
            // Ensure employee has a tasks array
            if (!Array.isArray(employee.tasks)) {
                employee.tasks = [];
            }
            employee.tasks.push(task);
        }
        return employee;
    });

    // Save updated employee list back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Reset form fields
    setAsignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
};


  return (
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>submitHandler(e)} className='flex w-full flex-wrap items-start justify-between '>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                            value={taskTitle}
                            onChange={(e)=>setTaskTitle(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text" placeholder='make ui design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                             value={taskDate}
                            onChange={(e)=>setTaskDate(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="date" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input
                             value={assignTo}
                            onChange={(e)=>setAsignTo(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                             value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text" placeholder='design, dev, etc' /></div>
                    </div>

                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                         value={taskDescription}
                            onChange={(e)=>setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-1 border-gray-400' name="" id="">
                        </textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-amber-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>

                    
                </form>
            </div>
  )
}

export default CreateTask
