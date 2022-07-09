
import React, { useState } from 'react'

export const CounterPrevState = () => {
    const[age, setAge] = useState(42);

    function ageIncrementer(){
        // changing the value based on the previous state
        setAge(a => a+1);  //this is an updater function which takes the value from previous state and calculate the next state from it
    }
  return (
    <>
        <button onClick={()=>{
            ageIncrementer();
            ageIncrementer();
            ageIncrementer();
        }
        }>+3</button>
        <button onClick={()=>{
            ageIncrementer();
        }
        }>+1</button>
        <p>Your age is: {age}</p>
    </>
  )
}
