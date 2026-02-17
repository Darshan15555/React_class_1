import { useState } from 'react'
import UserContexProvider from './context/UserContexProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  

  return (
    <UserContexProvider>
      <h1>React With Darshan</h1>
      <Login/>
      ---------------------------------------------------------------------
      <Profile/>
    </UserContexProvider>
  )
}

export default App
