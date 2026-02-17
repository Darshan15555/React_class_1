import { useState,useContext } from "react";

import UserContext from "./UserContex";

const UserContextProvider=({children})=>{
    const [user,setUser] =useState(null)
    
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}

        </UserContext.Provider>
    )
}
export default UserContextProvider