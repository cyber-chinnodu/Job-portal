

//real

// <!DOCTYPE html>
//  <html>
//  <head>
//   <title>Real DOM Example</title>
//  </head>
//  <body>
//   <h2>Real DOM Counter</h2>
//   <p id="realCounter">0</p>
//   <button onclick="incrementReal()">Increment</button>
//   <script>
//     let realCount = 0;
//     function incrementReal() {
//       realCount++;
//       document.getElementById("realCounter").innerText = realCount;
//     }
//   </script>
//  </body>
//  </html>

//virtual
import React, { useState } from 'react';
 import ReactDOM from 'react-dom';
 function VirtualDOMCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Virtual DOM Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
 }