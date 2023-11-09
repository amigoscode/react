import { Suspense, lazy, useState } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';
import styles from './App.module.css';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import { CounterContext } from './CounterContext';

const App = () => {
  return (
    <CounterContext.Provider value={{ counterOne: 10, counterTwo: 12 }}>
      <Counter />
    </CounterContext.Provider>
  );
};

export default App;
