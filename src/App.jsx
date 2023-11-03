import { Suspense, lazy } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';

const firstThree = posts.slice(0, 3);
const lastTwo = posts.slice(3, 5);

const LastTwo = lazy(() => import('./components/LastTwo'));

const App = () => {
  const darkMode = true;
  const styles = darkMode ? { color: 'white', backgroundColor: 'black' } : { color: 'black', backgroundColor: 'white' };

  return (
    <div style={{ ...styles, fontFamily: 'sans-serif', textAlign: 'center' }}>
      {firstThree.map((post) => (
        <Card key={post.id} video={post} style={{ color: 'red' }} />
      ))}
      <Suspense fallback={<div>Loading...</div>}>
        <LastTwo data={lastTwo} />
      </Suspense>
    </div>
  );
};

export default App;
