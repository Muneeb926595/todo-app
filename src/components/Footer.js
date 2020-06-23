import React,{useState,useContext} from 'react';
import {GlobalContext} from './TasksContext';

function Footer(){

    const {addNewTask}=useContext(GlobalContext)
    let [Text,setText]=useState('');
    const addingTask= e =>{
        e.preventDefault();


        const newTask={
            id:Math.floor(Math.random()*1000000),
            Text,
            isImportant:false,
            isCompleted:false
        }
        addNewTask(newTask);
        setText('');
    }

    return (
        <div>
            <form onSubmit={addingTask}>
                <input type="text" className="newTaskBox" onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Task" value={Text} required/>
                <button type="submit" className="foot"><span className="plus-sign">+</span>Add a task</button>
            </form>
            
        </div>
    )
}

export default Footer