
import React, { useState } from 'react'

export const CounterPrevState = () => {
    const[age, setAge] = useState(42);

    function handleChange(){
        // changing the value based on the previous state
        setAge(a => a+1);  //this is an updater function which takes the value from previous state and calculate the next state from it
        setAge(a => a+1);
        setAge(a => a+1);
    }
  return (
    <>
        <button onClick={handleChange}>Incrementer</button>
        <p>Your age is: {age}</p>
    </>
  )
}
