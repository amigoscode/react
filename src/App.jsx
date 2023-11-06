import { Suspense, lazy } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';
import styles from './App.module.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Counter />
    </div>
  );
};

export default App;
