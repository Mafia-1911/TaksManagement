//rafce
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import TaskListContextProvidor from '../context/TaskListContext.js'


const App = () => {
  return (
    <TaskListContextProvidor>
      <div className='container'>
        <div className="app-wrapper">
          <div className="main">
              <TaskList/>
              <TaskForm/>
          </div>
        </div>
      </div>
    </TaskListContextProvidor>
    
  )
}

export default App

