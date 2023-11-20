import { useState } from 'react';

const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <Counter />
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>;
};

export default App;
