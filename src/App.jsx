import { Suspense, lazy } from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import Card from './components/Card';
// import Details from './components/Details';
import { videos } from './video-data';

const Details = lazy(async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return import('./components/Details');
});

const App = () => {
  const showDetails = true;

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Details />
      </Suspense>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
};

export default App;
