import React from 'react'

const TaskForm = () => {
    return (
        <div>
            <form method="post" className="form">
                <input type="text" className="task-input" placeholder='Add task' required/>
                <div className="buttons">
                    <button type='submit' className="btn-add-task-btn">Add Task</button>
                    <button type='submit' className="btn clear-btn">clear</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
