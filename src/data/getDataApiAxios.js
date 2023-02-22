import axios from "axios";

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getRickMortyAxios = async() => {
  try {
    let characters = null;
    const response = await axios({
      url: baseUrl,
      method: 'GET'
    })
    const {results} = response.data;
    characters = results.map((characters) =>({
      id: characters.id,
      created: characters.created,
      gender: characters.gender,
      image: characters.image,
      location: characters.location.name,
      name: characters.name,
      origin: characters.origin.name,
      species: characters.species,
      status: characters.status
    }))
    console.log(characters);
    return characters; 
  } catch (error) {
    console.log(`Error`, error);
  }
}