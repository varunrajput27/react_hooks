import { useCallback, useState } from 'react'
import Childd from './components/Childd'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handlesubmit=useCallback(()=>{
    setCount(count+1)
  },[count])
 

  return (
    <>
  <h1>counter:{count}</h1>
  <button onClick={handlesubmit}> Add</button>
  <br />
  <br />
  <Childd buttonname="click me" handle={handlesubmit}/>
    </>
  )
}

export default App
