import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContex';

function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword] =useState('')

    const {setUser}=useContext(UserContext)
    const handleSumbit=(e)=>{
        e.preventDefault();
        setUser(username)
    }
  return (
    <div>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
            <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
            <button onClick={handleSumbit}>Submit</button>
    </div>
  )
}

export default Login
