import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import Details from './Details';

const Counter = () => {
  const [state, dispatch] = useContext(CounterContext);

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
