import React, { useState } from 'react'

// In react state is considered read-only so you should replace it rather trying to mutate the state
// 🚩 Don't mutate an object in state like this:
    // form.firstName = 'Taylor';

export const UpdatingObjects = () => {

  const [person, setPerson] = useState({firstname:'firstname', lastname:'lastname', email:'email'})

  function handleFirstNameChange(e){

    // creating the newObject and passing it to setPerson instead of mutating the object
    setPerson({
      // copying the old fields because only one field has changed
      ...person, //copy the old fields 
      firstname:e.target.value //But overide this one
    })
  }

  function handleLastNameChange(e){
    setPerson({
      ...person, 
      lastname:e.target.value 
    })
  }

  function handleEmailChange(e){
    setPerson({
      ...person,
      email:e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstname}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastname}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstname}{' '}
        {person.lastname}{' '}
        ({person.email})
      </p>
    </>
  )
}
 