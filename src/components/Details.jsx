import { useContext } from 'react';
import { CounterContext } from '../CounterContext';

const Details = () => {
  const value = useContext(CounterContext);
  return (
    <>
      <h1>Video title</h1>
      <p>1</p>
      <p>{value.counterTwo}</p>
    </>
  );
};

export default Details;
