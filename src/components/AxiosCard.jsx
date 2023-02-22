import React from 'react'
import './styles/AxiosCard.css'; 

export const AxiosCard = ({axiosCharacters}) => {
  return (
    <div className='containerCard'>
      {axiosCharacters.map((character) => (
        <div className={character.gender === 'Male' ? 'cardCharacterMale' : 'cardCharacterFemale'} key={character.id}>
          <img className='imgCard' src={character.image}/>
          <h2>{character.name}</h2>
          <p>Location:{character.location}</p>
          <p>Gender:{character.gender}</p>
        </div>
      ))
      }
    </div>
  )
}
