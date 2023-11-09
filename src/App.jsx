import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://pokeapi.co/api/v2/pokemon');
        setPokemonList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (!pokemonList?.results) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>Pokemon</h1>
        {pokemonList.results.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </>
    );
  }
};

export default App;
