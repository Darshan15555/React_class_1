import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passRef=useRef(null);

  const setFunction=useCallback(()=>{
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcsefghijklmnopqrstuvwsxyz";

     if(numberAllowed) str+="0123456789";
     if(CharAllowed) str+="`@#$%^&*()[]{}+-."

     for(let i=1;i<=length;i++){
        let randN=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(randN)
     }
     setPassword(pass)

  },[length,numberAllowed,CharAllowed,setPassword])

  const copyToClipBoard=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    setFunction();
  },[length,numberAllowed,CharAllowed,setFunction])

  return (
    <>
    <div className='w-screen h-screen'>
     <div className=' h-auto w-2/6 bg-gray-500 rounded-md justify-self-center p-1 mt-10 pl-5'>
        <h1 className='text-4xl text-center mt-10'>Password Generator</h1>
              <div className="pass w-4/5 h-8  flex mt-4 mb-5 rounded-lg">
              <legend className='font-bold'>password:</legend>
                <input type="text"
                  placeholder={password}
                  className='w-2/3 ml-3 outline-none'
                  readOnly
                  ref={passRef}

                />

                <button className='bg-blue-500 font-medium rounded-md outline-none w-20 text-center ml-2'
                  onClick={copyToClipBoard}
                >Copy</button>
              </div>

              <div className="flex w-1/1 mb-5">
                <legend className='font-medium'>Length: <span className='text-cyan-400'>{length}</span></legend>
                <input type="range" 
                    min={6}
                    max={12}
                    onChange={(e)=>{
                      setLength(e.target.value)
                    }}
                    className='ml-1'
                  />
                <legend className='font-medium'>Numbers:</legend>
                <input type='checkbox' onChange={()=>{setnumberAllowed((prev)=>!prev)}}/>

                <legend className='font-medium'>Characters:</legend>
                <input type='checkbox' onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          
              
              </div>

      </div>

      </div>
    </>
  )
}

export default App
