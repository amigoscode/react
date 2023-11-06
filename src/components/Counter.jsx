import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </section>
  );
};

export default Counter;