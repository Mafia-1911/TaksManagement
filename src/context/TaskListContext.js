import React,{createContext,useState} from 'react'

//at first create the context 
export const TaskListContext= createContext();

//make the providor 
const TaskListContextProvidor =()=>{
    const [tasks,setTasks]=useState([
        {title:'read a book',id:1},
        {title:'repair the car',id:2},
        {title:'walk',id:3}

    ])
        
    return <TaskListContext.Provider value={props }> <div>Task list context </div>;</TaskListContext.Provider>  
   
}   
export default TaskListContextProvidor;
