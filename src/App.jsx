import { useState } from "react";
import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";

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
  let result =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla quia tenetur asperiores voluptatem sequi. Suscipit quas nam eius quos.";

  return (
    <>
      <div>
        <p>Counter App</p>
        <h3>count:{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <Paragraph data={result} />
      </div>
    </>
  );
}

export default App;
