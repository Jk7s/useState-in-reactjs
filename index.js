import {React, useState } from 'react';
import ReactDOM from "react-dom/client";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <button count={count} onClick={handleClick}>Clicked {count} times</button>
      <button count={count} onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);