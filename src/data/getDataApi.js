export const getRickMorty = async() => {
    const url = 'https://rickandmortyapi.com/api/character'
    const resp = await fetch(url);
    console.log(resp);
}