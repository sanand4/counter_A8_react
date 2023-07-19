import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="card">
        <div className="counter">{counter}</div>
        <button onClick={decrement} className="decrement">
          decrement
        </button>

        <button onClick={increment} className="increment">
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
