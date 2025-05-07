import React from 'react'
import  {useContext}  from 'react'
import {userContext} from './../App'

const CHildC = () => {
    const username=useContext(userContext);
  return (
    <div>
        <h1>
           username is :{username.name}
        </h1>
    </div>
  )
}

export default CHildC