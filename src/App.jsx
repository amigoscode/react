import Card from './components/Card';
import { videos } from './video-data.js';
import styles from './App.module.css';
import { useState } from 'react';

const App = () => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['Drama', 'Science Fiction', 'Horror', 'Action', 'All'];

  const filterByGenre = (genre) => {
    setSelectedGenre(genre);
    if (genre === 'All') {
      setFilteredVideos(videos);
      return;
    }
    const filtered = videos.filter((video) => video.genre === genre);
    setFilteredVideos(filtered);
  };

  return (
    <>
      <header className={styles.genres}>
        {genres.map((genre, index) => (
          <button onClick={() => filterByGenre(genre)} key={index}>
            {genre}
          </button>
        ))}
        <h1>Showing {selectedGenre} videos</h1>
      </header>
      <div className={styles.wrapper}>
        {filteredVideos.map((video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default App;
