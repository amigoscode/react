import { Suspense, lazy } from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import Card from './components/Card';
// import Details from './components/Details';
import { videos } from './video-data';
import { ErrorBoundary } from 'react-error-boundary';

const Details = lazy(() => {
  return Promise.reject('fail');
});

const App = () => {
  const showDetails = true;

  return (
    <>
      <ErrorBoundary fallback={<div>Something has gone wrong</div>}>
        <Details />
      </ErrorBoundary>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
};

export default App;
