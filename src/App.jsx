import './App.css';
import BlogPost from './components/BlogPost';
import Card from './components/Card';
import Details from './components/Details';
import { videos } from './video-data';

const App = () => {
  return (
    <>
      {videos.map((video) => (
        <Card key={video.id} title={video.title} description={video.description} />
      ))}
    </>
  );
};

export default App;
