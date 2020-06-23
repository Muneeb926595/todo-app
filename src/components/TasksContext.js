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
        for(let i=0;i<state.tasks.length;i++)
        {
            if(state.tasks[i].id===id){
                state.tasks[i].isCompleted=!(state.tasks[i].isCompleted);
            }
        }
    }

    function makeTaskImportant(id){
        for(let i=0;i<state.tasks.length;i++)
        {
            if(state.tasks[i].id===id){
                state.tasks[i].isImportant=!(state.tasks[i].isImportant);
            }
        }
    }
    return(
        <GlobalContext.Provider value={{tasks:state.tasks,addNewTask,deleteTask,makeTaskCompleted,makeTaskImportant}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;