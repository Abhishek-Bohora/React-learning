import { useState } from "react"

function Counter(){
    const [counter, setCounter] = useState(0);

    function incrementCounter(){
        setCounter(counter+1);
    }

    return( 
        <>
         <button onClick={incrementCounter}>Increment {counter}</button>
        </>
       
    )
}

export default Counter