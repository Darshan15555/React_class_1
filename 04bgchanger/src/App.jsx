import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className='h-screen w-screen flex flex-wrap duration-200 justify-center'
       style={{backgroundColor:color}} >

          <div className='fixed bottom-10 flex gap-4 w-10/12 h-20 flex-wrap rounded-2xl inset-x-0 justify-self-center justify-center items-center'>
             <button onClick={()=>setColor("red")} className='w-20 h-4/5 bg-red-600  rounded-full font-extralight text-black'>Red</button>
             <button onClick={()=>setColor("white")} className='w-20 h-4/5 bg-white  rounded-full font-extralight text-black'>white</button>
             <button onClick={()=>setColor("green")} className='w-20 h-4/5 bg-green-500  rounded-full font-extralight text-black'>green</button>
             <button onClick={()=>setColor("yellow")} className='w-20 h-4/5 bg-yellow-400  rounded-full font-extralight text-black'>yellow</button>
             <button onClick={()=>setColor("pink")} className='w-20 h-4/5 bg-pink-400  rounded-full font-extralight text-black'>pink</button>
             <button onClick={()=>setColor("blue")} className='w-20 h-4/5 bg-blue-500  rounded-full font-extralight text-black'>blue</button>
          </div>

       </div>
    </>
  )
}

export default App
