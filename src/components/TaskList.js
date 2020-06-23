import React,{useContext} from 'react';
import {GlobalContext} from './TasksContext';
import Task from './Task';
import '../taskItem.css'

function myImportantFunc(tasks)
{
    let myArray=[]
    tasks.map(task=>{if(task.isImportant){myArray.push(task)}})
    return(
        myArray.map(task=><Task key={task.id} task={task}/>)
    )
}
function myCompletedFunc(tasks)
{
    let myArray=[]
    tasks.map(task=>{if(task.isCompleted){myArray.push(task)}})
    return(
        myArray.map(task=><Task key={task.id} task={task}/>)
    )
}
function TaskList(props){
    const {tasks}=useContext(GlobalContext);
    if(props.id==="important")
    {
        return (
            <div className="scrollable">
                <ul className="myTodoList">
                    {myImportantFunc(tasks)}
                </ul>
            </div>
        )
    }
    else if(props.id==="completed")
    {   
        return (
            <div className="scrollable">
                <ul className="myTodoList">
                     {myCompletedFunc(tasks)}
                </ul>
            </div>
        )
    }
    else
    {
        return (
            <div className="scrollable">
                <ul className="myTodoList">
                    {tasks.map(task=><Task key={task.id} task={task}/>)}
                </ul>
            </div>
        )
    }

}

export default TaskList