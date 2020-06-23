import React,{createContext,useReducer} from 'react';
import MyReducer from './MyReducer';
const initialState={
    tasks:[]
}

export const GlobalContext=createContext(initialState);

const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(MyReducer,initialState)

    function addNewTask(task){
        dispatch({
            type:'ADD_TASK',
            payload:task
        });
    }
    function deleteTask(id){
        dispatch({
            type:'DELETE_TASK',
            payload:id
        });
    }
    
    function makeTaskCompleted(id){
        state.tasks.map(task=>{
            if(task.id===id){
                task.isCompleted=!(task.isCompleted);
            }
            return;
        })
    }

    function makeTaskImportant(id){
        state.tasks.map(task=>{
            if(task.id===id){
                task.isImportant=!(task.isImportant);
            }
            return;
        })
    }
    return(
        <GlobalContext.Provider value={{tasks:state.tasks,addNewTask,deleteTask,makeTaskCompleted,makeTaskImportant}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;