import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

  const {id}=useParams();
    
  return (
    <div className='justify-self-center bg-orange-200 w-full h-96 flex justify-center align-super'>
            <div className="self-center text-white text-9xl">
                
                User:{id}
                
            </div> 
    </div>
  )
}

export default User
