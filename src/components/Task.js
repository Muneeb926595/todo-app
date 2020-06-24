import React,{useContext} from 'react';
import '../taskItem.css'
import { GlobalContext } from './TasksContext';
function Task({task}){
    const {deleteTask}=useContext(GlobalContext)
    const {makeTaskCompleted}=useContext(GlobalContext)
    const {makeTaskImportant}=useContext(GlobalContext)
    return (
            <li className="myTodoListItem makeItFlex">

                <div style={{display:'flex',margin:'5px', alignItems: 'center'}}>
                    <input type="checkbox" style={{marginRight:'10px'}} onChange={(e)=>{alert("Task Completed");makeTaskCompleted(task.id)}} />
                    <p>{task.Text}</p>
                </div>
                
                <span style={{display:'flex',margin:'5px'}}>
                    <input type="checkbox" className="star" onChange={(e)=>{alert("Task Added To Important");makeTaskImportant(task.id)}}/>
                    <button style={{border:'none'}} onClick={(e)=>{
                        e.preventDefault();
                        deleteTask(task.id);
                    }} >Delete</button>
                </span>

            </li>
    )
}

export default Task