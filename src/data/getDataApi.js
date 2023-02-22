
const baseUrl = 'https://rickandmortyapi.com/api/character'

export const fetchRickMortyApi = async() => {
    const response = await fetch( baseUrl );
    const { results } = await response.json()

    let object = results.map((character) =>({
        id: character.id,
        created: character.created,
        gender: character.gender,
        image: character.image,
        name: character.name,
        location: character.location.name,
        origin: character.origin.name,
        status: character.status
    }))
    console.log(object);
    return object;
}