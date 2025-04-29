function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);
    const increment = () => setCount(c => c + 1);
    return [count, increment];
  }
  
  function CustomHookComponent() {
    const [count, increment] = useCounter();
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  