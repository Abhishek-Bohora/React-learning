import React, { useState } from 'react'

const TextFieldString = () => {
    const [text, setText] = useState('Type something....');

    function handleChange(e){
        setText(e.target.value)
    }
  return (
    <div>
        <input value={text} onChange={handleChange}/>
        <p>You typed: {text}</p>
        <button onClick={()=>{setText('Type something....')}}>Reset</button>
    </div>
  )
}

export default TextFieldString



