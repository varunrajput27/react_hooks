import { useState,useMemo } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function expensive(n){
    for(let i=0;i<10000;i++){

    }
    return n*2;

  }
  const dvalue=useMemo(()=>expensive(2),[]);

  return (
    <>
      <h1>counter :{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>add</button>
      <h2>double value is : {dvalue}</h2>
    </>
  )
}

export default App
