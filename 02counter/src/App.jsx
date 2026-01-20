import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(15);

  const addvalue =()=>{
        // counter++;
        if(counter<20)
        setCounter(counter+1);
        console.log(`added ${Math.random()} ,${counter}`);
        
  }
  const remove=()=>{
    // counter--;
    if(counter>0)
    setCounter(counter-1)
    console.log(`removed ${Math.random()} ${counter}`)
  }

  return (
    <>  
       
        <h1>chai aur react</h1>

         <button onClick={addvalue}>Add value {counter}</button>
         <br /> <br />
         <button onClick={remove}>Remove Value {counter}</button>
         <p>footer: {counter}</p>
    </>
  )
}

export default App
