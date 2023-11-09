import { useEffect, useState } from 'react';

const App = () => {
  const [starWarsList, setStarWarsList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();
        setStarWarsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (!starWarsList?.results) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>Star Wars List</h1>
        {starWarsList.results.map((starWars) => (
          <article key={starWars.name}>
            <h2>{starWars.name}</h2>
            <p>gender: {starWars.gender}</p>
            <p>birth year: {starWars.birth_year}</p>
            <p>eye color: {starWars.eye_color}</p>
          </article>
        ))}
      </>
    );
  }
};

export default App;
