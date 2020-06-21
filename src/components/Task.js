import React,{useContext} from 'react';
import '../taskItem.css'
function Task({task}){
    return (
            <li className="myTodoListItem makeItFlex">
                <p>{task.Text}</p>
                <input type="checkbox" className="star" onChange={()=>{alert("Item Added To Important")}}/>

            </li>
    )
}

export default Task