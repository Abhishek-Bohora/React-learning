import React, { useState } from 'react'

export const Checkbox = () => {
    const[check, setCheck] = useState(true);

    function handleCheckChange(e){
        setCheck(e.target.checked);
    }
  return (
    <>
        <input type="checkbox" checked={check} onChange={handleCheckChange}/>
        <p>{check? 'You like ':'You did not like'}</p>
    </>
  )
}
