import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('component mounted');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('counter value change');
    }
    return () => console.log('component has unmounted');
  }, [count]);

  return (
    <section>
      <h1>{count}</h1>
      <h1>Count + 1:{count + 1}</h1>
      <h1>Count + 2:{count + 2}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => count > 0 && setCount((prevCount) => prevCount - 1)}>-</button>
    </section>
  );
};

export default Counter;
