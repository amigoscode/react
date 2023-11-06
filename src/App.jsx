import { Suspense, lazy, useState } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';
import styles from './App.module.css';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'on' : 'off'}</button>
    </div>
  );
};

export default App;
