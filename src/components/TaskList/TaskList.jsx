import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto  flex items-center justify-start gap-10 flex-nowrap w-full py-5 mt-10'>
   {data.tasks.map((el)=>{
     if(el.active){
      return <AcceptTask/>
     }
     if(el.NewTask){
      return <NewTask/>
     }
     if(el.completed){
      return <CompleteTask/>
     }
     if(el.failed){
      return <FailedTask/>
     }
})}
    </div>

  )
}

export default TaskList
