import React,{useState,useEffect} from 'react';

import { CreateTask } from '../modals/CreateTask';
import {Cards} from './Cards.js'

export const Todolist = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [error,setError]=useState(false);
   
 
    useEffect(() => {
         let arr = localStorage.getItem("taskList")
        if(taskList.length==0){
            // {console.log("no")}
            setError(true)}
        if(arr){



            let obj = JSON.parse(arr)
            setTaskList(obj)
         
        }
    
    
        
   
    }, [])


    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const deleteTask=index=>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setError(false)
        setModal(false)// popup closed
    }
  return (
      <>
      
    <div className='header text-center  '>
        <h3 className='fw-bold text-uppercase fs-1'>Todo List</h3>
        <button className='btn btn-primary fw-bold mt-2 ' onClick={()=>setModal(true)}>Add Task</button>
    </div>
    <div className = "task-container">
    {error && <div className="error">No Tasks are Added</div>
    }

            {taskList && taskList.map((obj , index) => <Cards taskObj = {obj} index = {index} deleteTask={deleteTask} updateListArray={updateListArray} /> )}
            </div>
    <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  )
}
