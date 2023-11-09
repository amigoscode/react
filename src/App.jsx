import Card from './components/Card';
import { videos } from './video-data.js';
import styles from './App.module.css';

const App = () => {
  const genres = ['Drama', 'Science Fiction', 'Horror', 'Action', 'All'];

  return (
    <div className={styles.wrapper}>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  );
};

export default App;
