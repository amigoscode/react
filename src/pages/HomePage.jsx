import { videos } from '../video-data';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to our video streaming website! We offer a vast collection of movies and TV shows from different genres,
        including action, comedy, romance, and science fiction.
      </p>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
};

export default HomePage;
