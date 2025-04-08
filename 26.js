import React from 'react';
// ✅ Functional Component
function Welcome(props) {
 return <h2>Hello, {props.name}!</h2>;
}
// Another functional component using state
function Counter() {
 const [count, setCount] = React.useState(0);
 return (
   <div>
     <h3>Counter: {count}</h3>
     <button onClick={() => setCount(count + 1)}>Increment</button>
   </div>
 );
}
// Main App component
function App() {
 return (
   <div style={{ textAlign: 'center', marginTop: '40px' }}>
     <Welcome name="Greeshma" />
     <Counter />
   </div>
 );
}
export default App;