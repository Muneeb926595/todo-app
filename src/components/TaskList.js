import React,{useContext} from 'react';
import {GlobalContext} from './TasksContext';
import Task from './Task';
import '../taskItem.css'
function TaskList(){
    const {tasks}=useContext(GlobalContext);
    return (
        <div className="scrollable">
            <ul className="myTodoList">
                {tasks.map(task=><Task key={task.id} task={task}/>)}
            </ul>
        </div>
    )
}

export default TaskList