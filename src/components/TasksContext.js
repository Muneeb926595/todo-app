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
    return(
        <GlobalContext.Provider value={{tasks:state.tasks,addNewTask,deleteTask}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;