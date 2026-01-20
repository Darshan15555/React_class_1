import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp(){
  return (
    <div>
        <h1>My custom App</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//     href:'http//www.google.com',
//     target:'_blank'
//   },
//   chilren:"visit google.com"
// }


// const AnotherElement=(
//   <a href="https://google.com" target='_blank'>visit Google</a>
// )


// this is how react covert manually in translator dynamically with proper parameter
// const ReactElement=React.createElement(
//   'a',
//   {href:'http://google.com',target:'_blank'},
//   'click me here'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
      {/* MyApp() // it works */}
      {/* <Myapp/> */}
      {/* ReactElement() */}

      {/* <AnotherElement/> */}
      
      {/* <ReactElement/> */}

  </StrictMode>,
)
