import { useEffect, useState } from 'react';
import styles from '../components/Card.module.css';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1 className={styles.title}>{pokemonData.name}</h1>
      <p className={styles.desc}>
        height: {pokemonData.height}, weight: {pokemonData.weight}
      </p>
    </>
  );
};

export default Details;
