import React ,{useContext}from 'react'
import UserContext from '../context/UserContex'
function Profile() {
    const {user}=useContext(UserContext)
    
    if(!user) return <div>Please login</div>

    return <div>Welcome {user}</div>
}

export default Profile
