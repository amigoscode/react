import { useContext } from 'react';
import { CounterContext } from '../CounterContext';

const Details = () => {
  const [state] = useContext(CounterContext);
  return (
    <>
      <h1>Video title</h1>
      <p>1</p>
      <p>{state.countTwo}</p>
    </>
  );
};

export default Details;
