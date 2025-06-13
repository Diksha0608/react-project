import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto  flex items-center justify-start gap-10 flex-nowrap w-full py-5 mt-10'>
   {data.tasks.map((el,idx)=>{
     if(el.active){
      return <AcceptTask key={idx}/>
     }
     if(el.NewTask){
      return <NewTask key={idx}/>
     }
     if(el.completed){
      return <CompleteTask key={idx}/>
     }
     if(el.failed){
      return <FailedTask key={idx}/>
     }
})}
    </div>

  )
}

export default TaskList
