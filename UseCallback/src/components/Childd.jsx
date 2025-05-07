import React from 'react'

const Childd = React.memo( (props)=> {

    console.log("hello i am child ");
    
  return (
    <>
    <button onClick={props.handle}>{props.buttonname}</button>
    </>
  )
})

export default Childd