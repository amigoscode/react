import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://pokeapi.co/api/v2/pokemon');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await response.json();
      setPokemonList(data);
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
