//rafce
import React,{useContext} from 'react'
import Task from './Task'
//useContext allows us to use the context 
import {TaskListContext} from '../context/TaskListContext'
console.log(TaskListContext);


const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    return (
        <div>
            <ul className="list">{
                 tasks.map(task=>{
                   return <Task task={task} key={task.id} />
                 })
            }</ul>
        </div>
    )
}

export default TaskList
