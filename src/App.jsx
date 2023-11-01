import './App.css';
import BlogPost from './components/BlogPost';
import Card from './components/Card';
import Details from './components/Details';
import { videos } from './video-data';

const App = () => {
  return (
    <>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
};

export default App;
