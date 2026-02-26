import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const [msg,setmsg]=useState('');
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault();
        if(!msg) return ;
       // addTodo(msg)  // this is wrong , it expects the object
       addTodo({todo:msg ,completed:false})
       setmsg('');
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                value={msg}
                onChange={(e)=>{
                    setmsg(e.target.value)
                }}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

