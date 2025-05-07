import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

//step1. create a context
const userContext = createContext();
//step 2. make 
//step3 . send a data or value

function App() {

  const [data, setData] = useState({ name: "varun" })


  return (
    <>
      <userContext.Provider value={data}>
        <ChildA />
      </userContext.Provider>
    </>
  )
}

export default App
export { userContext }
