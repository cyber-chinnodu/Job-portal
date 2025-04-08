import React from 'react';
 // ✅ Child Component
 function ChildComponent() {
  return <p>I am the Child Component!</p>;
 }
 // ✅ Parent Component
 function ParentComponent() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>I am the Parent Component</h2>
      {/* Calling Child Component */}
      <ChildComponent />
    </div>
  );
 }
 // Main App component
 function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
 }
 export default App;
