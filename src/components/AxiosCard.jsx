import React from 'react'
import './styles/AxiosCard.css'; 

export const AxiosCard = ({axiosCharacters}) => {
  return (
    <div className='containerCard'>
      {axiosCharacters.map((character) => (
        <div className='cardCharacter' key={character.id}>
          <img src={character.image}/>
          <h2>{character.name}</h2>
          <p>Location:{character.location}</p>
        </div>
      ))
      }
    </div>
  )
}
