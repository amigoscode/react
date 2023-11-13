import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!pokemonList) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Pokemon List</h1>
        {pokemonList?.map(({ name }) => (
          <div key={name}>
            <Link to={`/${name}`}>{name}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default HomePage;
