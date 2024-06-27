import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const handleDecrement = () => {
    setCount((count) => {
      return count - 1;
    });
  };
  return (
    <>
      <div>
        <p>Counter App</p>
        <h3>count:{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
