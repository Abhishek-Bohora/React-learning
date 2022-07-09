// Updating the Nested Objects

import React, { useState } from 'react'

export const UpdatingNestedObjects = () => {

    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });


    function handleNameChange(e){
        setPerson({
            ...person,
            name:e.target.value
        })
    }

    function handleTitleChange(e){
        setPerson({
            ...person, //keeping the old value of top level object
            artwork:{
                ...person.artwork,  //keeping the old value of nested object
                title:e.target.value  //only changing the title
            }
        })
    }

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city:e.target.value //only changing the city
            }
        })
    }

  return (
   <>
    <label>
      Name:
      <input
        value={person.name}
        onChange={handleNameChange}
      />
    </label>
    <label>
      Title:
      <input
        value={person.artwork.title}
        onChange={handleTitleChange}
      />
    </label>
    <label>
      City:
      <input
        value={person.artwork.city}
        onChange={handleCityChange}
      />
    </label>
    <p>
      {person.name}{' '}
      {person.artwork.title}{' '}
      ({person.artwork.city})
    </p>
    <img src={person.artwork.image} alt={person.artwork.title}/>
  </>
  )
}


// use Immer for simplifying Nesting objects 