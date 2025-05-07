import { useState,useEffect } from 'react'

import './App.css'

function App() {


  const [count, setCount] = useState(0);
  const [total,useTotal]=useState(1);
  const increment=()=>{
    if(count<10)
    setCount(count+1);
  
    useTotal(total+1);
  }

  const decrement=()=>{
    if(count>0)
    setCount(count-1);
    useTotal(total-1);
  }


  //first => side effect logic/code
  //second=> cleaning function
  //third =>  comma sepearted dependency list



  /////////////////////////////////// type 1
  // run on every render

  // useEffect(() => {
  //  alert("i will run on every render")
  
  // })

  ////////////////////////////////////// type 2
  // run only on first render

  // useEffect(() => {
  //   alert("i will run on only first render")
   
  //  },[])

   ////////////////////////////////////// type 3
  // run  when when count is updated

  // useEffect(() => {
  //   alert("i will run  when count is updated")
   
  //  },[count])

   ////////////////////////////////////// type 4
  // run  on mutiple dependency

  useEffect(() => {
    alert("i will run  when count and total  is updated")
   
   },[count,total])
  

  return (
    <>
    <h1>Counter : {count}</h1>
    <br />
    <h1>Total : {total}</h1>
    
    <button onClick={increment}>Add</button>
    <br />
    <br />
    <button onClick={decrement}>Remove</button>
    </>
  )
}

export default App






