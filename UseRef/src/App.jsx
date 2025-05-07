// import './App.css'
// import { useState,useEffect,useRef } from 'react';


// function App() {
//   const [count, setCount] = useState(0);
//   let num=useRef(11);


//   const increment=()=>{
//     setCount(count+1);
//     num.current=num.current+1;
//   }
//   useEffect(()=>{
//     console.log("your value is ",num.current)
//   })

//   return (
//     <>
//      <h1>Count : {count}</h1>
//      <button onClick={increment}>ADD</button>
//     </>
//   )
// }

// export default App
// ///////////////////////////////////////////////////////////////////
import { useState } from 'react'

import './App.css'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const timeref = useRef(null);

  function increment() {
    timeref.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }

  function stopped() {
    clearInterval(timeref.current);


  }

  function reseeting() {
    stopped();
    setCount(0);


  }


  return (
    <>
      <h1>Timer: {count}</h1>
      <br />
      <br />
      <button onClick={increment}>start</button>
      <br />
      <br />
      <button onClick={stopped}>stop</button>
      <br />
      <br />
      <button onClick={reseeting}>reset</button>

    </>
  )
}

export default App

