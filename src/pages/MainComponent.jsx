import { useEffect, useState } from 'react';
import { fetchRickMortyApi } from '../data/getDataApi';
import {FetchCard} from '../components/FetchCard';
import { AxiosCard } from '../components/AxiosCard';
import { getRickMortyAxios } from '../data/getDataApiAxios';


export const MainComponent = () => {

  const [fetchCharacter, setFetchCharacter] = useState([]);
  const [axiosCharacters, setAxiosCharacter] = useState([]);

  /**Method with Fetch */
  const loadFetchApi = async() => {
    const method = await fetchRickMortyApi();
    setFetchCharacter( method ); 
  }

  /**Method with Axios*/
  const loadAxiosApi = async() => {
    const axiosMethod = await getRickMortyAxios();
    setAxiosCharacter(axiosMethod);
  }

  useEffect(() => {
    //loadFetchApi()
    loadAxiosApi();
  }, [])

  
  return(
    <div>
      <h1>Rick and Morty Api</h1>
      {/* <FetchCard fetchCharacter={fetchCharacter} /> */}
      <AxiosCard axiosCharacters={axiosCharacters}/>
    </div>
  )
}