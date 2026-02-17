// import React,{useState,useEffect} from 'react'

// function Github() {

//   const [data,setData]=useState();

//   useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(res=>res.json())
//     .then(d =>{
//        console.log(d)
//        setData(d)
//     })
//   },[])

  
//   return (
//     <div className='text-center bg-gray-500 text-3xl p-4 m-4'>
//             GitHub followers:{data ? data.followers : "Loading..."}
//     </div>
//   )
// }

// export default Github


import React, { useState, useEffect } from "react";

function Github() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((err) => {
        setError(err.message);
      });

  }, []);   // important → run only once

  if (error) {
    return (
      <div className="text-center bg-red-400 text-white text-xl p-4 m-4">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center bg-gray-300 text-xl p-4 m-4">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-center bg-gray-500 text-white text-3xl p-4 m-4 rounded-lg">
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        className="w-28 h-28 rounded-full mx-auto mb-4"
      />
      <h2 className="font-bold">{data.name}</h2>
      <p className="mt-2">Followers: {data.followers}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
}

export default Github;
