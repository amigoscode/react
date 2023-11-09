import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import useLifeCycleLog from '../useLifecycleLog';

const Details = () => {
  const [state] = useContext(CounterContext);
  useLifeCycleLog('Details');
  return (
    <>
      <h1>Video title</h1>
      <p>1</p>
      <p>{state.countTwo}</p>
    </>
  );
};

export default Details;
