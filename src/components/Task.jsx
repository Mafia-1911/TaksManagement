import React from 'react'

const Task = ({task}) => {
    {
        //return task title  
        //add two buttons for deleting and adding 
      
    }
    return (
     
        <li className="list-item"> 
        <span>{task.title}</span>
        <div>
            <button className="btn-delete task-btn"><i className=" fas fa-trash-alt"></i></button>
            <button className="btn-edit task-btn"><i className=" fas fa-trash-alt"></i></button>

        </div>
        </li>
       
    );
};

export default Task
