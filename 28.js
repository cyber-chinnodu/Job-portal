import React, { Component } from 'react';
// ✅ Class Component
class Welcome extends Component {
 render() {
   return <h2>Hello, {this.props.name}!</h2>;
 }
}
// ✅ Class Component with State
class Counter extends Component {
 constructor(props) {
   super(props);
   this.state = {
     count: 0
   };
 }
 increment = () => {
   this.setState({ count: this.state.count + 1 });
 };
 render() {
   return (
     <div>
       <h3>Counter: {this.state.count}</h3>
       <button onClick={this.increment}>Increment</button>
     </div>
   );
 }
}
// ✅ Main App Component
class App extends Component {
 render() {
   return (
     <div style={{ textAlign: 'center', marginTop: '40px' }}>
       <Welcome name="Greeshma" />
       <Counter />
     </div>
   );
 }
}
export default App;