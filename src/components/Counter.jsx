import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../CounterContext';
import Details from './Details';
import useLifeCycleLog from '../useLifecycleLog';

const Counter = () => {
  const [state, dispatch] = useContext(CounterContext);
  useLifeCycleLog('Counter');

  return (
    <section>
      <h1>{state.countOne}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <h1>{state.countTwo}</h1>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>reset</button>
      <Details />
    </section>
  );
};

export default Counter;
