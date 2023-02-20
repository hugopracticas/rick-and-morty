import { useState, useEffect } from 'react';
import { getRickMorty } from '../data/getDataApi';

export const MainComponent = () => {

  const [data, setData] = useState();

  const getData = async() => {
    const newInfo = getRickMorty();
    setData( newInfo );
  }

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <h1>Lista</h1>
    </div>
  )
}