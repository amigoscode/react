import { Suspense, lazy, useState } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';
import styles from './App.module.css';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';

const App = () => {
  return <Counter />;
};

export default App;
