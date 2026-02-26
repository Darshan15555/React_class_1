import {createContext,useContext} from 'react'

export const TodoContex=createContext({
    todos:[
        {
            id:1,
            todo:"this is msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}

});

export const TodoProvider=TodoContex.Provider;

export const useTodo=()=>{
    return useContext(TodoContex)
}
