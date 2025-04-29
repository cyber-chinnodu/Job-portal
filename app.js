import React, { useEffect, useState } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');
    return () => console.log('Component Unmounted');
  }, []);

  useEffect(() => {
    console.log('Component Updated');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
