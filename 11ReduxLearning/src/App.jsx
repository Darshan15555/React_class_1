import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement,IncrementBy5} from "./Redux/features/counterSlice"

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(IncrementBy5())}>IncrementBy5</button>
    </div>
  )
}

export default App