import { useContext, useEffect, useReducer, useState } from 'react';
import { CounterContext } from '../CounterContext';
import Details from './Details';

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

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const value = useContext(CounterContext);

  return (
    <section>
      <h1>{value.counterOne}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <h1>{state.countTwo}</h1>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>reset</button>
      <Details />
    </section>
  );
};

export default Counter;
