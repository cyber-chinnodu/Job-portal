import React from 'react';
// ✅ Child component using props
function Message(props) {
 return (
   <div>
     <h2>Hello, {props.name}!</h2>
     <p>Your role is: {props.role}</p>


   </div>)
}
// ✅ Parent component
function App() {
 return (
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
     {/* Passing props to the child */}
     <Message name="Greeshma" role="Frontend Developer Intern" />
   </div>
 );
}
export default App