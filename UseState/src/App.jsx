import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment =()=>{
    if(count<10)
    setCount(count+1);
  }
  const decrement =()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>ADD</button>
      <br />
      <br />
      <button onClick={decrement}>Remove</button>
    </>
  )
}

export default App
