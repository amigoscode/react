import { Suspense, lazy, useReducer, useState } from 'react';
import Card from './components/Card';
import { posts } from './tech-data';
import styles from './App.module.css';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import { CounterContext } from './CounterContext';

const initialState = {
  countOne: 0,
  countTwo: 0,
};

const counterReducer = (state, action) => {
  const actions = {
    increment: () => ({ ...state, countOne: state.countOne + 1 }),
    decrement: () => ({ ...state, countTwo: state.countTwo - 1 }),
    reset: () => initialState,
  };

  return actions[action] ? actions[action]() : state;
};

const App = () => {
  const value = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={value}>
      <Counter />
    </CounterContext.Provider>
  );
};

export default App;
