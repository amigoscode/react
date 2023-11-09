import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://swapi.dev/api/people');
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
          <article key={pokemon.name} style={{ marginTop: '1em' }}>
            <h2>{pokemon.name}</h2>
            <p>gender: {pokemon.gender}</p>
            <p>birth year: {pokemon.birth_year}</p>
            <p>eye color: {pokemon.eye_color}</p>
          </article>
        ))}
      </>
    );
  }
};

export default App;
